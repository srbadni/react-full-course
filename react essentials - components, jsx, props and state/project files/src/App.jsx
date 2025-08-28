import {useState} from "react";

import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header"
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  const [selectedConcept, setSelectedConcept] = useState("یکی از دکمه ها را انتخاب کنید");

  function handleSelect(selectedButton) {
    //selected => components, jsx, props, state
    setSelectedConcept(selectedButton);
    //console.log(selectedConcept);
}

console.log("کامپوننت App رندر شد")

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>مفاهیم اصلی</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]}
            />
            <CoreConcept {...CORE_CONCEPTS[2]}
            />
            <CoreConcept title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>مثال‌ها</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>کامپوننت‌ها</TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {selectedConcept}
        </section>
      </main>
    </div>
  );
}

export default App;

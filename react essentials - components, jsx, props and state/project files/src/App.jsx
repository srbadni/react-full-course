import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

const reactDescriptions = ['مقدماتی', 'کلیدی', 'اساسی'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[getRandomInt(2)];

  return (<header>
    <img src={reactImg} alt="react core concepts" />
    <h1>مبانی ری‌اکت</h1>
    <p>
      مفاهیم {description} React که توی هر اپی که می‌سازید بهشون نیاز دارین
    </p>
  </header>)
}

function CoreConcept({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

function App() {
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
      </main>
    </div>
  );
}

export default App;

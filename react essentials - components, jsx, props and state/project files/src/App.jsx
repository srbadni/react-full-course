import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";

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

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
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
            <CoreConcept title="کامپوننت‌ها"
              description="هر کامپوننت یک قطعهٔ آماده از UI هستش (مثلاً دکمه یا card). با ترکیب این کامپوننت ها UI رو می‌سازید" 
              image={componentsImg}
              />
            <CoreConcept title="Props" />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

import reactImg from "../assets/react-core-concepts.png";

const reactDescriptions = ['مقدماتی', 'کلیدی', 'اساسی'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = reactDescriptions[getRandomInt(2)];
  
    return (<header>
      <img src={reactImg} alt="react core concepts" />
      <h1>مبانی ری‌اکت</h1>
      <p>
        مفاهیم {description} React که توی هر اپی که می‌سازید بهشون نیاز دارین
      </p>
    </header>)
  }
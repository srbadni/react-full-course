const reactDescriptions = ['مقدماتی', 'کلیدی', 'اساسی'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[getRandomInt(2)];

  return (<header>
    <img src="src/assets/react-core-concepts.png" alt="react core concepts" />
    <h1>مبانی ری‌اکت</h1>
    <p>
      مفاهیم {description} React که توی هر اپی که می‌سازید بهشون نیاز دارین
    </p>
  </header>)
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>بریم شروع کنیم!</h2>
      </main>
    </div>
  );
}

export default App;

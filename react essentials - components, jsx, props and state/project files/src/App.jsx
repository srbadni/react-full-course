function Header() {
  return (<header>
    <img src="src/assets/react-core-concepts.png" alt="react core concepts" />
    <h1>مبانی ری‌اکت</h1>
    <p>
      مفاهیم کلیدی React که توی هر اپی که می‌سازید بهشون نیاز دارین
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

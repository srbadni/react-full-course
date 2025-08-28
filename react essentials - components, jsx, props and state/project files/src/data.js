import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [{
    image: componentsImg,
    title: 'کامپوننت',
    description: 'هر کامپوننت یک قطعهٔ آماده از UI هستش (مثلاً دکمه یا card).\n' +
        'با ترکیب این کامپوننت ها UI رو می‌سازید',
}, {
    image: jsxImg,
    title: 'JSX',
    description: 'کدی HTML‌مانند که در نهایت تبدیل به تگ های HTML در مرورگر میشه',
}, {
    image: propsImg,
    title: 'Props',
    description: 'با این ویژگی کامپوننت ها رو قابل استفاده مجدد با ورودی های متفاوت میکنید',
}, {
    image: stateImg,
    title: 'State',
    description: 'مقداری که React خودش اون رو مدیریت می‌کنه و هر وقت تغییر کنه، کامپوننت دوباره رندر میشه و UI آپدیت میشه',
},];

export const EXAMPLES = {
    components: {
        title: 'کامپوننت',
        description: 'کامپوننت‌ها قطعه کد های آماده‌شده در اپ‌های React هستن. هر کامپوننت یک بخش جدا (شامل HTML + CSS اختیاری + JS)‌ه که یه بخش قابل نمایش در UI  رو رندر می‌کنه',
        code: `
function Welcome() {
  return <h1>سلام دوستان من!</h1>;
}`,
    }, jsx: {
        title: 'JSX',
        description: 'JSX یک دستخط یا syntax خاص برای JavaScript‌ه. داخلش میتونید از کل ویژگی های js استفاده کنید (مثلاً می‌تونه محتوای dynamic مثل نام کاربر رو نمایش بده).',
        code: `
<div>
  <h1>خوش اومدی {userName}</h1>
  <p>یادگیری ری‌اکت</p>
</div>`,
    }, props: {
        title: 'Props',
        description: 'کامپوننت‌ها می‌تونن ورودی‌های دلخواه بگیرن که بهشون props می‌گیم؛ دقیقاً مثل آرگومان‌های یک تابع',
        code: `
function Welcome(props) {
  return <h1>سلام, {props.name}</h1>;
}`,
    }, state: {
        title: 'State',
        description: 'State به کامپوننت‌های React این امکان رو میده تا خروجی‌شون رو با توجه به رفتار کاربر یا پاسخ‌های API و بک اند و هر تغییر دیگه‌ای، توی طول زمان به‌روز کنن',
        code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>نمایش جزئیات</button>
      {isVisible && <p>جزئیات تستی!</p>}
    </div>
  );
}`,
    },
};
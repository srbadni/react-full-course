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
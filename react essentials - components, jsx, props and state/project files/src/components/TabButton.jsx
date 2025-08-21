export default function TabButton({children}) {
    function handleClick() {
        console.log("چطورید رفقا");
        
    }
    return <li><button onClick={handleClick}>{children}</button></li>;
}
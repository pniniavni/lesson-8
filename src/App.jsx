import BirthDate from "./components/BirthDate";
import GreetingsList from "./components/GreetingsList";
import ChooseLanguage from "./components/ChooseLanguage";

const greetings = [
  "מזל טוב ליום הולדתך!",
  "שתהיה לך שנה מלאה בהצלחות",
  "עד מאה ועשרים",
];

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Birthday App</h1>
      <ChooseLanguage />
      <BirthDate birthDate={new Date(2015, 10, 20)} />
      <GreetingsList greetings={greetings} />
    </div>
  );
}
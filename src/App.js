import Main from "./components/Main";
import { LanguageProvider } from "./context/LanguageContext";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <div>
        <Main />
      </div>
    </LanguageProvider>
  );
}

export default App;

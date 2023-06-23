import "./App.css";
import { version } from "../package.json";
import ReloadPrompt from "./ReloadPrompt";

function App() {
  return (
    <>
      <h1>Vite + React + PWA</h1>
      <h2>{`Current Version ${version}`}</h2>
      <ReloadPrompt />
    </>
  );
}

export default App;

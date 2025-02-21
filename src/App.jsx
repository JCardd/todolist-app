import { Header } from "./components/layout/Header.jsx";
import { Content } from "./components/layout/Content.jsx";

export const App = () => (
  <div className="App">
    <header className="App-header">
      <Header />
      <Content />
    </header>
  </div>
);

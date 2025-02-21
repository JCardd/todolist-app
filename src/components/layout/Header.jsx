import { FaPizzaSlice } from "react-icons/fa";
export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todolist" />
        </div>
        <div className="Settings">
          <ui>
            <li>+</li>
            <li>
              <FaPizzaSlice />
            </li>
          </ui>
        </div>
      </nav>
    </header>
  );
};

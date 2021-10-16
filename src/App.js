import logo from "./logo.svg";
import "./App.css";
import Content from "./component/content";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Product from "./component/Product";
import About from "./component/about";
import Contact from "./component/contact";
import filedownload from "./component/filedownlaod";
import Help from "./component/help";
import Login from "./component/login";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container-fluid">
            <div className="logic">
              <img src="/img/logo.png" />
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                ar
                ia-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="parent">
                {menu.map((el, ind) => {
                  return (
                    <div key={ind} className="items">
                      <Link style={menuStyle} to={el.to} className="solid">
                        {el.text}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>

        <div className="content"></div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/content" component={Content} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/filedownload" component={filedownload} />
          <Route path="/help" component={Help} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;

const menu = [
  { text: "Нүүр", to: "/home" },
  { text: "Бүтээгдэхүүн", to: "/content" },
  { text: "Зөвлөгөө", to: "/product" },
  { text: "Бидний тухай", to: "/about" },
  { text: "Холбоо барих", to: "/contact" },
  { text: "Програм татах", to: "/filedownload" },
  { text: "Тусламж", to: "/help" },
  { text: "Нэвтрэх", to: "/login" },
];
const menuStyle = {
  color: "rgb(164, 164, 164)",
};

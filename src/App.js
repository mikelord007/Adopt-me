import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";

// const App = () => {
//   return React.createElement("div", {id:"hello"}, [
//     React.createElement("h1", {}, "Adoptd Me!dfdfd"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "havannah",
//     }),
//     React.createElement(Pet, {
//       name: "mayo",
//       animal: "cat",
//       breed: "idklmao",
//     }),
//     React.createElement(Pet, {
//       name: "syrup",
//       animal: "cat",
//       breed: "catsarecat",
//     }),
//   ]);
// };

const App = () => {
  const themeHook = useState("darkblue");

  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

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
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

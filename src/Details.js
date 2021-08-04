import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }

  handleIndexClick(event){
    this.setState({})
  }

  render() {
    const { animal, breed, city, state, description, name, images } = this.state;

    if (this.state.loading) {
      return <h2>loading … </h2>;
    }


    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal}-${breed}-${city}-${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

// const Details = () => {
//     return <h2>Hello </h2>;
// };
const DetailsWithRouter = withRouter(Details);

export default function DetailsWithBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter/>
    </ErrorBoundary>
  );
};

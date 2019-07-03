import React, { Component } from "react";
import { COLORS } from "./MyColors";
import deleteCookie from "./components/Cookies/deleteCookie";
import setCookie from "./components/Cookies/setCookie";
import checkCookie from "./components/Cookies/checkCookie";

const GradientContext = React.createContext();

class GradientProvider extends Component {
  constructor(props) {
    super(props);
    console.log("called in constructor");
    this.n = COLORS.length;
    this.pickedID = Math.floor(Math.random() * this.n + 1) - 1;
    this.myColor = COLORS[this.pickedID];
    this.state = {
      id: this.myColor.id,
      definition: this.myColor.definition,
      name: this.myColor.name,
      color1: this.myColor.color1,
      color2: this.myColor.color2,
      orientation1: this.myColor.orientation1,
      orientation2: this.myColor.orientation2,
      position: 1,
      favorite: ""
    };
  }

  changeOrientation1 = new_value => {
    this.setState({ orientation1: new_value });
  };

  changeOrientation2 = new_value => {
    this.setState({ orientation2: new_value });
  };

  rotateGradient = () => {
    if (
      this.state.orientation1 === "top" &&
      this.state.orientation2 === "right"
    ) {
      this.setState({ orientation1: "bottom" }, () => {
        this.changeOrientation1(this.state.orientation1);
        this.changeOrientation2(this.state.orientation2);
      });
    }
    if (
      this.state.orientation1 === "bottom" &&
      this.state.orientation2 === "right"
    ) {
      this.setState({ orientation2: "left" }, () => {
        this.changeOrientation1(this.state.orientation1);
        this.changeOrientation2(this.state.orientation2);
      });
    }
    if (
      this.state.orientation1 === "bottom" &&
      this.state.orientation2 === "left"
    ) {
      this.setState({ orientation1: "top" }, () => {
        this.changeOrientation1(this.state.orientation1);
        this.changeOrientation2(this.state.orientation2);
      });
    }
    if (
      this.state.orientation1 === "top" &&
      this.state.orientation2 === "left"
    ) {
      this.setState({ orientation2: "right" }, () => {
        this.changeOrientation1(this.state.orientation1);
        this.changeOrientation2(this.state.orientation2);
      });
    }
  };

  updateGradient = newGradient => {
    this.setState({
      ...this.state,
      id: newGradient.id,
      definition: newGradient.definition,
      name: newGradient.name,
      color1: newGradient.color1,
      color2: newGradient.color2,
      orientation1: newGradient.orientation1,
      orientation2: newGradient.orientation2
    });
  };

  previousButton = () => {
    if (this.state.id === 0) {
      const newGradient = COLORS[this.n - 1];
      this.updateGradient(newGradient);
    } else {
      const newGradient = COLORS[this.state.id - 1];
      this.updateGradient(newGradient);
    }
  };

  nextButton = () => {
    if (this.state.id === this.n - 1) {
      const newGradient = COLORS[0];
      this.updateGradient(newGradient);
    } else {
      const newGradient = COLORS[this.state.id + 1];
      this.updateGradient(newGradient);
    }
  };

  addToFavorites = () => {
    const cookieName = this.state.name;
    localStorage.setItem(cookieName, true);
    if (localStorage.getItem(cookieName)) {
      console.log("is true");
    }
    // if gradient is favorite, removed it from string and unstar
    if (this.state.favorite) {
      this.setState({ ...this.state, favorite: false });
      deleteCookie(cookieName);
    }

    // if gradient is not already part of cookie string, add it from string and star it

    if (!this.state.favorite) {
      setCookie(cookieName, true);
      this.setState({ ...this.state, favorite: true });
    }
  };

  componentDidMount() {
    const cookieName = this.state.name;
    console.log(`hey from component will mount ${cookieName}`);
    if (checkCookie(cookieName)) {
      this.setState({ ...this.state, favorite: true });
    }
    if (!checkCookie(cookieName)) {
      this.setState({ ...this.state, favorite: false });
    }
  }

  componentWillMount() {
    const cookieName = this.state.name;
    console.log(`hey from component will mount ${cookieName}`);
    if (checkCookie(cookieName)) {
      this.setState({ ...this.state, favorite: true });
    }
    if (!checkCookie(cookieName)) {
      this.setState({ ...this.state, favorite: false });
    }
  }

  // componentWillUpdate(nextProps, nextState) {

  // }

  render() {
    return (
      <GradientContext.Provider
        value={{
          ...this.state,
          rotateGradient: this.rotateGradient,
          previousButton: this.previousButton,
          nextButton: this.nextButton,
          addToFavorites: this.addToFavorites
        }}
      >
        {this.props.children}
      </GradientContext.Provider>
    );
  }
}

const GradientConsumer = GradientContext.Consumer;

export { GradientProvider, GradientConsumer, GradientContext };

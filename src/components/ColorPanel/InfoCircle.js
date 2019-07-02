import React, { Component } from "react";
import { COLORS } from "../../MyColors";

class InfoCircle extends Component {
  state = {
    definition: ""
  };
  componentDidMount() {
    const def = COLORS[this.props.id].definition;
    this.setState({ definition: def });
  }

  render() {
    return (
      <i
        className="fa fa-info-circle"
        data-toggle="tooltip"
        data-placement="left"
        title={this.state.definition}
      />
    );
  }
}

export default InfoCircle;

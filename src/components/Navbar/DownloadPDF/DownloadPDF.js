import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { GradientContext } from "../../../context";

class DownloadPDF extends Component {
  static contextType = GradientContext;
  state = {
    name: "",
    colorGradient: ""
  };

  downloadPDF = () => {
    const input = document.getElementById("capture");
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save(`${this.state.name}.pdf`);
    });
  };
  setName = name => {
    this.setState({ name: name }, () => console.log(this.state.name));
  };

  componentDidMount() {
    const gradient = this.context;
    let colorGradient = `linear-gradient(to ${gradient.orientation1} ${
      gradient.orientation2
    }, ${gradient.color1}, ${gradient.color2})`;
    this.setState({ name: gradient.name, colorGradient: colorGradient }, () => {
      console.log(this.state.colorGradient);
    });
  }

  render() {
    return (
      <React.Fragment>
        <span onClick={this.downloadPDF}>
          <i
            className="fas fa-file-pdf"
            data-tip={`Download as PDF`}
            data-for="downloadpdf"
            style={{ fontSize: "20px" }}
          />
          <ReactTooltip place="bottom" id="downloadpdf" />
        </span>
      </React.Fragment>
    );
  }
}

export default DownloadPDF;

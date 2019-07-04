import React from "react";

const CSSCode = props => {
  let colorGradient = `to ${props.orientation1} ${props.orientation2}, ${
    props.color1
  }, ${props.color2})`;
  return (
    <div
      className="text-left"
      style={{
        fontSize: "0.9rem",
        width: "100%",
        padding: "5%",
        background: "#F9FAFC"
      }}
    >
      <code>{`background: ${props.color1}; `}</code>
      <code className="text-secondary">{`/* fallback for old browsers */`}</code>
      <br />
      <code>{`background: -webkit-linear-gradient(${colorGradient};`}</code>
      <code className="text-secondary">{`/* Chrome 10-25, Safari 5.1-6 */`}</code>
      <br />
      <code>{`background: linear-gradient(${colorGradient};`}</code>
      <code className="text-secondary">
        {`/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`}
      </code>
      <br />
    </div>
  );
};

export default CSSCode;

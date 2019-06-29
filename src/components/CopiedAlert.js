import React from "react";

const CopiedAlert = () => {
  return (
    <div className="alert alert-success" role="alert">
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <strong>Copied to clipboard!</strong>
    </div>
  );
};

export default CopiedAlert;

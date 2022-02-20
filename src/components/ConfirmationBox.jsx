import React from "react";

const ConfirmationBox = ({ onChange }) => {
  return (
    <div className="confirm-box-outside">
      <div className="confirm-box">
        <div className="confirm-box-content">
          <p>
            Your Ad details are created successfully. Please find your ad
            details in the table below
          </p>
        </div>
        <div className="">
          <button className="btn btn-primary button" onClick={onChange}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationBox;

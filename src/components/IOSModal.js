import React, { useState } from "react";

const IOSModal = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={clicked ? "hide" : "ios-modal-wrapper"}>
      <div className="ios-modal">
        <h2>disclaimer!</h2>
        <p>
          volume adjustments using the volume sliders <strong>will not</strong>{" "}
          work on ios devices
        </p>
        <button
          onClick={() => {
            setClicked(true);
          }}
        >
          understood
        </button>
      </div>
    </div>
  );
};

export default IOSModal;

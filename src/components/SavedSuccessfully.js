import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const SavedSuccessfully = ({ path, reload, timeoutId }) => {
  let navigate = useNavigate();

  const refreshPage = () => {
    if (reload) return window.location.reload();
    clearTimeout(timeoutId);
    navigate(path);
  };

  return (
    <div onClick={refreshPage}>
      <div className="overlay-all"></div>
      <div className="saved_overlay_wrapper">
        <div className="saved_overlay">
          <div>
            <FontAwesomeIcon icon={faCheckCircle} className="checkIcon" />
          </div>
          <p>Saved successfully!</p>
        </div>
      </div>
    </div>
  );
};

export default SavedSuccessfully;

import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function DanceMove({ dancelist }) {
  const [video, setVideo] = useState();

  function getVideo(link) {
    window.FB.api(
      "/instagram_oembed",
      "GET",
      {
        url: link,
        access_token:
          "EAAHDvEqItj8BAJepSBdT2zFsHwcFabwKvxF5pI9j8540TElacZCm8uODeijtt5c5YBXWtoSyU2IC17bRRszgsT9mGpOEcVf9sZC7XWOlQPhjOVCEY1OZBIsbuAAaMVVxpIUcMYhs8VotPc6AG1YMkOxSC2utoSO1mCQRzbwNQDnZBIVo8H9LeQfLEEVZAFnKQ9YrPfCMuZA90FouiEMSAflqyG2ZBqDBRmccEiGIFDsyYCDVKVX6ZAE9",
      },
      function (response) {
        setVideo(response.html);
      }
    );
  }

  const params = useParams();
  let move = dancelist.find((move) => move.Id === +params.id);

  let notes;
  let notesText;
  let link;
  let videoOrText;

  if (!move?.HOX) {
    notesText = "No notes added.";
  } else {
    notesText = "Notes: ";
    notes = move?.HOX;
  }

  if (!move?.Link) {
    videoOrText = "No Instagram link added.";
  } else {
    getVideo(move.Link);
    videoOrText = video;
    link = move?.Link;
  }

  return (
    <div className="DanceMove">
      <Link to={"/edit/" + params.id} className="squre-pen-wrapper">
        <FontAwesomeIcon icon={faEdit} className="squre-pen" />
      </Link>

      <h3>{move?.Move}</h3>
      <p>by</p>
      <h3>{move?.Creator}</h3>

      <div id="notesAndIGWrapper">
        <p>
          {notesText}
          <span>{notes}</span>
        </p>
        <a href={link} target="_blank" rel="noreferrer noopener" id="IG">
          {videoOrText}
        </a>
      </div>
    </div>
  );
}

export default DanceMove;

import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState, useEffect } from "react";

const DanceMove = ({ dancelist }) => {
  const params = useParams();
  let move = dancelist.moves.find((move) => move.Id === +params.id);

  /* HERE DOING THE API CALL 
  
  const [IGvideo, setIGvideo] = useState([]);
  const APIend = move?.Link;

   useEffect(() => {
    axios
      .get("https://graph.facebook.com/v12.0/instagram_oembed?url=" + APIend)
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        const data = res.data;
        console.log(data);

        Promise(data).then((data) => {
          setIGvideo(data);
        });
      });
    console.log(IGvideo);
  }, []); */

  let notes;
  let notesText;
  let linkText;
  let link;

  if (!move?.HOX) {
    notesText = "No notes added.";
  } else {
    notesText = "Notes: ";
    notes = move?.HOX;
  }

  if (!move?.Link) {
    linkText = "Instagram video will be here";
  } else {
    console.log(move?.Link);
    link = move?.Link; //THE VIDEO WILL COME HERE IGvideo;
    linkText = move?.Link;
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
        <a
          href={link}
          /* VIDEO WILL APPEAR HERE */ target="_blank"
          rel="noreferrer noopener"
          id="IG"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default DanceMove;

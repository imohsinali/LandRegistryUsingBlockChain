import * as React from "react";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function LandGallery({ img, title, price, date }) {
  return (
    <div className="Land-container">
      <Title className="Land-title">{title}</Title>

      <img src={img} alt="" className="myLand" />

      <div className="Land-details">
        <Typography component="p" variant="h5">
          Rs:{price}
        </Typography>
        <Typography color="text.secondary">{date}</Typography>
      </div>
    </div>
  );
}

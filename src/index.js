import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test({ maxRating, size, color, className, messages, defaultRating }) {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        maxRating={maxRating}
        onSetRating={setMovieRating}
        color={color}
        className={className}
        messages={messages}
        defaultRating={defaultRating}
        size={size}
      />
      <p>This move was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* The user of this component can add the maximum amount of stars they want */}
    {/* <StarRating maxRating={5} /> */}
    {/* <StarRating
      maxRating={5}
      size={24}
      color="red"
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={1}
    /> */}
    <Test maxRating={15} />
    <Test
      maxRating={5}
      size={48}
      color="red"
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={0}
    />

    <Test size={24} />
  </React.StrictMode>
);

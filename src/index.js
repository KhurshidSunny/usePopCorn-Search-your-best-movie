import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         maxRating={10}
//         color="blue"
//         onSetMovieRating={setMovieRating}
//       />
//       <p>This movie was {movieRating} rated</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      className="text"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={5} size={24} color="red" defaultRating={3} />

    <Test /> */}
  </React.StrictMode>
);

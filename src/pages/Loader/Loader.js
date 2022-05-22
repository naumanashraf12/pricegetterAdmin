import React from "react";
import "./Loader.scss";
import PriceGetter from "./PriceGetter.png";

const Loader = () => {
  // return <div className="loader"></div>;
  return (
    <img
      style={{ width: "200px" }}
      src={PriceGetter}
      alt="loader"
      className="shimmer center"
    />
  );
};

export default Loader;

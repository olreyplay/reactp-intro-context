import React, { useContext } from "react";
import Context from "../context";

const Navigation = () => {
  const data = useContext(Context);
  return (
    <div>
      <p className="navigation-text">
        Welcome back <span>{data}</span>
      </p>
      <hr />
    </div>
  );
};

export default Navigation;

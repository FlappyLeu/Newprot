import React from "./React";
import { Outlet } from "react-router";

export default function Content({ data }, props) {
  console.log(props);
  const style = {
    display: "flex",
  };
  return (
    <div className="content">
      <p>{data}</p>
    </div>
  );
}

import React, { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Content from "../components/Content";

export default function Contents({ data }) {
  //   console.log(data);
  return (
    <div>
      {data.map((e, i) => {
        return (
          <Link key={i} to={`${e}`}>
            {e}
          </Link>
        );
      })}
      <Outlet />
    </div>
  );
}

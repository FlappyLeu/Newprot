import React from "./React";

export default function Content({ data }, props) {
  console.log(props);
  return (
    <div className="content">
      <p>{data}</p>
    </div>
  );
}

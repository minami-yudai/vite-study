import React from "react";
export function Hmenu({ number, value }) {
  return (
    <a><div className="hover" id={`h-m${number}`}>{value}</div></a>
  );
}

export function Amenu({ number, value , color}) {
  return (
    <a><div className="hover" id={`a-m${number}`} style={{borderColor:`#${color}`}}>{value}学部</div></a>
  );
}

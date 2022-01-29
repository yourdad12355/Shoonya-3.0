import React from "react";

function Image(props) {
  return (
    <>
      <img src={props.src} alt={props.alt} width={props.width} className={props.class}/>
    </>
  );
}

export default Image;

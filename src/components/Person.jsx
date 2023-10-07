import React from "react";

function Person({ image, name, age }) {
  return (
    <article>
      <img
        src={image}
        alt={name}
        style={{ width: 50, height: 50 }}
      />
      <h3>{name}</h3>
      <h4>{age}</h4>
    </article>
  );
}

export default Person;

import React from "react";

import classes from "./Order.module.scss";

const order = (props) => {
  let ingredientsArray = [];

  for (let ingredientName in props.ingredients) {
    ingredientsArray.push({
      name: ingredientName,
      ammount: props.ingredients[ingredientName],
    });
  }
  const ingredientOutput = ingredientsArray.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
        key={ig.name}
      >
        {" "}
        {ig.name} ({ig.ammount}){" "}
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <h3 style={{ textTransform: "capitalize" }}>{props.customer}</h3>
      <p>
        {props.delivery}
        <strong style={{ textTransform: "capitalize", color: "red" }}>
          ({props.type})
        </strong>
      </p>
      <p>{ingredientOutput} </p>
      <p>
        <strong>${parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;

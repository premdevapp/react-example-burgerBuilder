import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import classes from "./Burger.module.scss";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, inx) => {
        return <BurgerIngredient key={igKey + inx} type={igKey} />;
      });
    })
    .reduce((prev, curr) => {
      return prev.concat(curr);
    }, []);

  if (transformedIngredients.length === 0)
    transformedIngredients = <p>Please Add Some Ingredients</p>;

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;

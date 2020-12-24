import * as actionTypes from "../actions/actionTypes";

import { updateObject } from "../utility";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.3,
  meat: 1.3,
};

const initialState = {
  ingredients: null,
  totalPrice: 0.99,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      const updatedIngredients = updateObject(state.ingredients, {
        [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
      });

      const updatedState = updateObject(state, {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      });
      return updatedState;
    case actionTypes.REMOVE_INGREDIENT:
      return updateObject(state, {
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      });
    case actionTypes.SET_INGREDIENTS:
      return updateObject(state, {
        ingredients: action.ingredients,
        totalPrice: 0.99,
        error: false,
      });
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return updateObject(state, { error: true });
    default:
      return state;
  }
};

export default reducer;

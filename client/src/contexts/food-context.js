import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { isAuth } from "../utils/auth";

export const FoodContext = createContext({
  meals: null,
  setMeals: () => {},
  selectedMeal: null,
  setSelectedMeal: () => {},
});
export const FoodProvider = ({ children }) => {
  // console.log(user)
  useEffect(() => {
    const fetchFoodItems = async () => {
      let user = null;
      isAuth()
        ? (user = JSON.parse(localStorage.getItem("user")))
        : (user = null);
      console.log(user["_id"]);
      const res = await axios.get(
        `http://localhost:4020/food/get-all-vendor-items/${user["_id"]}`
      );
      setMeals(res.data);
    };
    fetchFoodItems();
  }, []);

  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState({});
  const value = { meals, setMeals, selectedMeal, setSelectedMeal };
  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
};

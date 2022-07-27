import { useContext } from "react"
import { FoodContext } from "../../contexts/food-context"
import { ListTitle } from "../../Pages/vendor-routes/reports/reports.styles"
import { MealContainer, ItemContainer, ItemImage, AvailabilityContainer } from "./meal.style"

export const Meal = ({ meal }) => {
    const { name, price, info, availability, rating, imageURL } = meal
    const {setSelectedMeal} = useContext(FoodContext)
    return (
        <MealContainer onClick={()=>setSelectedMeal(meal)}>
            <ItemContainer>
                {/* <ItemImage src={`http://localhost:4020/images/${imageURL[0]}`} /> */}
                {name}
            </ItemContainer>
            <ItemContainer>{info}</ItemContainer>
            <ItemContainer>{`${price} $`}</ItemContainer>
            <ItemContainer>{rating}</ItemContainer>
            <AvailabilityContainer availability={availability}>
                {availability ? 'Available' : 'Not Available'}
            </AvailabilityContainer>

        </MealContainer>
    )
}
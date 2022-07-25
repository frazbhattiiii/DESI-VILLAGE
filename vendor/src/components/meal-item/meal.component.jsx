import { ListTitle } from "../../routes/reports/reports.styles"
import { MealContainer, ItemContainer, ItemImage, AvailabilityContainer } from "./meal.style"

export const Meal = ({ meal }) => {
    const { name, price, info, availability, rating } = meal
    return (
        <MealContainer>
            <ItemContainer>
                <ItemImage src={`https://robohash.org/${name + price}`} />
                <ListTitle>{name}</ListTitle>
            </ItemContainer>
            <ListTitle>{info}</ListTitle>
            <ListTitle>{`${price} $`}</ListTitle>
            <ListTitle>{rating}</ListTitle>
            <AvailabilityContainer availability={availability}>
                <ListTitle>{availability ? 'Available' : 'Not Available'}</ListTitle>
            </AvailabilityContainer>

        </MealContainer>
    )
}
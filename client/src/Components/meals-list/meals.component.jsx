import { Meal } from '../meal-item/meal.component'
import { MealsContainer } from './meals.styles'
import CustomScroll from 'react-custom-scroll';
export const Meals = ({ meals }) => {
    return (



        
            meals.map((meal, id) => (
                <Meal key={id} meal={meal} />
            ))
        



    )
}
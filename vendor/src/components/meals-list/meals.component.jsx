import MEAL from '../../item-list.json'
import { Meal } from '../meal-item/meal.component'
export const Meals = ()=>{
    return(
        // [].map((meal)=>(
        //     <div>meal</div>
        // ))
        <Meal meal={MEAL}/>
    )
}
import { useNavigate } from "react-router-dom"

export const Dashboard = ()=>{
    const navigation = useNavigate()
    const handleCreateMeal = ()=>{
        navigation('/vendor/create-meal')
    }
    return(
        <div>
            <button onClick={handleCreateMeal}>Create Meal</button>
        </div>
    )
}
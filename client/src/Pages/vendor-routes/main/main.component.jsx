import { Routes, Route } from "react-router-dom";
import { Drawer } from "../../../Components/drawer/drawer.component"
import { MainContainer } from "./main.styles"
import { Dashboard } from '../dashboard/dashboard.component'
import { Reports } from '../reports/reports.component'
import { Requests } from '../requests/requests.component'
import { CreatMeal } from "../create-meal/create-meal.component";

export const Main = () => {
    return (
        <MainContainer>
            <Drawer />
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path='reports' element={<Reports />} />
                <Route path='requests' element={<Requests />} />
                <Route path="create-meal" element={<CreatMeal/>}></Route>
            </Routes>

        </MainContainer>
    )
}
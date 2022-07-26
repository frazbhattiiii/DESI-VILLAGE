import { SearchButton } from "../../../abstracts/search"
import { PrimaryHeading } from "../../../abstracts/headings"
import { Search } from "../../../abstracts/search"
import { Meals } from "../../../Components/meals-list/meals.component"
import {
    ListHeader,
    ListTitleContainer,
    ListTitle,
    MealsListContainer,
    ReportsContainer,
    ReportsDetail
} from "./reports.styles"

export const Reports = () => {
    return (
        <ReportsContainer>
            <MealsListContainer>
                <ListHeader>
                    <PrimaryHeading>Meals List</PrimaryHeading>
                    <Search placeholder="Search" type={`text`} />
                </ListHeader>
                <ListTitleContainer>
                    <ListTitle>Name</ListTitle>
                    <ListTitle>Info</ListTitle>
                    <ListTitle>Price</ListTitle>
                    <ListTitle>Rating</ListTitle>
                    <ListTitle>Status</ListTitle>
                </ListTitleContainer>
                <Meals/>
            </MealsListContainer>
            <ReportsDetail>
                Details
            </ReportsDetail>
        </ReportsContainer>
    )
}
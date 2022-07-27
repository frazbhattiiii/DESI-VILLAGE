import { PrimaryHeading, SecondaryHeading, TertiaryHeading } from "../../../abstracts/headings"
import { Search } from "../../../abstracts/search"
import { Meals } from "../../../Components/meals-list/meals.component"

import {
    ListHeader,
    ListTitleContainer,
    ListTitle,
    MealsListContainer,
    ReportsContainer,
    ReportsDetail,
    Paginate,
    ItemImg,
    DetailItems,
    ItemContainer,
    ItemKey,
    ItemValue,
    FooterContainer
} from "./reports.styles"
import { useContext } from "react"
import { FoodContext } from "../../../contexts/food-context"
import { useState } from "react"
import { EditButton } from "../../../abstracts/buttons"
export const Reports = () => {
    const { meals, selectedMeal } = useContext(FoodContext)
    const [search, setSearch] = useState('')

    const filteredMeals = meals.filter(meal => {
        return meal.name.toLowerCase().includes(search.toLowerCase())
    })
    const { imageURL, name, description } = selectedMeal

    return (
        <ReportsContainer>
            <MealsListContainer>
                <ListHeader>
                    <PrimaryHeading>Meals List</PrimaryHeading>
                    <Search placeholder="Search" type={`text`} value={search} onChange={(e) => setSearch(e.target.value)} />
                </ListHeader>
                <ListTitleContainer>
                    <ListTitle>Name</ListTitle>
                    <ListTitle>Info</ListTitle>
                    <ListTitle>Price</ListTitle>
                    <ListTitle>Rating</ListTitle>
                    <ListTitle>Status</ListTitle>
                </ListTitleContainer>
                <Meals meals={filteredMeals} />
                {/* <Paginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={10}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={(page) => console.log(page.selected)}
                    activeClassName={"active"}
                /> */}
            </MealsListContainer>
            {Object.keys(selectedMeal).length ?
                (
                    <ReportsDetail>
                        <ItemImg src={`http://localhost:4020/images/${imageURL[0]}`} />
                        <SecondaryHeading>{name.toUpperCase()}</SecondaryHeading>
                        <TertiaryHeading>{description}</TertiaryHeading>
                        <DetailItems>
                            <ItemContainer>
                                <ItemKey>Email</ItemKey>
                                <ItemValue>Email</ItemValue>
                            </ItemContainer>
                            <ItemContainer>
                                <ItemKey>Email</ItemKey>
                                <ItemValue>Email</ItemValue>
                            </ItemContainer>
                            <ItemContainer>
                                <ItemKey>Email</ItemKey>
                                <ItemValue>Email</ItemValue>
                            </ItemContainer>
                            <ItemContainer>
                                <ItemKey>Email</ItemKey>
                                <ItemValue>Email</ItemValue>
                            </ItemContainer>
                            <ItemContainer>
                                <ItemKey>Email</ItemKey>
                                <ItemValue>Email</ItemValue>
                            </ItemContainer>
                            <ItemContainer>
                                <ItemKey>Email</ItemKey>
                                <ItemValue>Email</ItemValue>
                            </ItemContainer>
                        </DetailItems>
                        <FooterContainer>
                            <EditButton>Edit</EditButton>
                        </FooterContainer>
                    </ReportsDetail>
                )
                : (
                    <ReportsDetail>
                        Please select an item
                    </ReportsDetail>
                )

            }

        </ReportsContainer>
    )
}
import styled from "styled-components";
import { colorPrimary, colorTertiary, colorWhite } from "../../abstracts/variables";
import { ListTitle, ListTitleContainer } from "../../routes/reports/reports.styles";

export const MealContainer = styled(ListTitleContainer)`
    background-color: ${colorWhite};
    box-shadow: .1rem 1.7rem 4.4rem rgba(3, 2, 41, 0.07);
    border-radius: .7rem;
    padding: 1rem 0;
    margin-top: 1.5rem;
`
export const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ItemImage = styled.img`
    width: 25%;
    border-radius: 10rem;
`
export const AvailabilityContainer = styled(ItemContainer)`
    border-radius: 2rem;
    color: ${({availability}) => (availability ? `${colorPrimary}` : `${colorTertiary}`)};
    background-color: ${({availability}) => (availability ? `rgba(26, 192, 115,0.1)`:`rgba(231, 29, 54,0.1)`)};;
`
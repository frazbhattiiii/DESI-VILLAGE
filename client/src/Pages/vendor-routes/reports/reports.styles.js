import styled from "styled-components";
import { colorGrey } from "../../../abstracts/variables";

export const ReportsContainer = styled.div`
    flex: 1;
    display: flex;
`
export const MealsListContainer = styled.div`
    background-color: ${colorGrey};
    flex: 1 1 70rem;
    padding: 2rem 4rem;
`
export const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;
`
export const ListTitleContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr 1fr 1fr 2fr;
    column-gap: 10rem;
`
export const ListTitle = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem
`
export const ReportsDetail = styled.div`
    flex-basis: 30rem;
`
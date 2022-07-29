import styled from "styled-components";
import { colorGrey } from "../../../abstracts/variables";
export const CreateMealContainer = styled.div`
    display: flex;
    flex: 1 0 auto;
    background-color: ${colorGrey};
    padding: 4rem 4rem;
    overflow-x: auto;
    overflow-y: auto;
    flex-direction: column;
    row-gap: 6rem;
    &::-webkit-scrollbar {
        width: .5rem;
    }

/* Track */
    &::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
 
/* Handle */
    &::-webkit-scrollbar-thumb {
        background: #888; 
    }
`


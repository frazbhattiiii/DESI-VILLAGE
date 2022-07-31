import styled from "styled-components";
import { colorGrey } from "../../../abstracts/variables";
export const CreateMealContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  background-color: ${colorGrey};
  padding: 2.5rem 2.5rem;
  overflow-x: auto;
  overflow-y: auto;
  flex-direction: column;
  row-gap: 3.75rem;
  &::-webkit-scrollbar {
    width: 0.3rem;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
`;

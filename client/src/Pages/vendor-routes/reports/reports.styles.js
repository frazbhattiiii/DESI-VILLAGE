import styled from "styled-components";
import {
  colorBlack,
  colorGrey,
  colorPrimary,
  colorWhite,
} from "../../../abstracts/variables";
import ReactPaginate from "react-paginate";
export const ReportsContainer = styled.div`
  flex: 1;
  display: flex;
`;
export const MealsListContainer = styled.div`
  background-color: ${colorGrey};
  flex: 1 0 auto;
  padding: 1.25rem 2.5rem;
  overflow-x: auto;
  overflow-y: auto;
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

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.1rem;
`;
export const ListTitleContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr 1fr 2fr;
  column-gap: 6.25rem;
`;
export const ListTitle = styled.span`
  text-align: left;
  font-size: 0.87rem;
  font-weight: 600;
`;
export const ReportsDetail = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1.2rem 1.2rem;
  row-gap: 0.62rem;
`;
export const ItemImg = styled.img`
  width: 16rem;
  border-radius: 0.3rem;
  object-fit: contain;
  object-position: center;
`;
export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 0.62rem;
  flex-wrap: wrap;
  width: 100%;
`;
export const Tag = styled.span`
  padding: 0.3rem 0.93rem;
  background-color: ${colorPrimary};
  border-radius: 0.1rem;
  font-size: 0.75rem;
  color: ${colorWhite};
  margin-top: 0.3rem;
`;
export const DetailItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.3rem;
  width: 100%;
`;
export const ItemContainer = styled.div`
  padding: 0.62rem 0.93rem;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export const ItemKey = styled.span`
  font-size: 0.87rem;
  font-weight: 500;
`;
export const ItemValue = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
`;
export const FooterContainer = styled.div`
  margin-top: auto;
  width: 100%;
`;

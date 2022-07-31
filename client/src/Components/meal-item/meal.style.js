import styled from "styled-components";
import {
  colorPrimary,
  colorTertiary,
  colorWhite,
} from "../../abstracts/variables";
import {
  ListTitle,
  ListTitleContainer,
} from "../../Pages/vendor-routes/reports/reports.styles";

export const MealContainer = styled(ListTitleContainer)`
  background-color: ${colorWhite};
  box-shadow: 0.1rem 1rem 2.7rem rgba(3, 2, 41, 0.07);
  border-radius: 0.4rem;
  padding: 0.62rem 0.43rem;
  margin-top: 0.93rem;
  cursor: pointer;
`;
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 0.81rem;
`;
export const ItemImage = styled.img`
  width: 30%;
`;
export const AvailabilityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.81rem;
  border-radius: 1.25rem;
  padding: 0.3rem 0;
  color: ${({ availability }) =>
    availability ? `${colorPrimary}` : `${colorTertiary}`};
  background-color: ${({ availability }) =>
    availability ? `rgba(26, 192, 115,0.1)` : `rgba(231, 29, 54,0.1)`}; ;
`;

import styled from "styled-components";
import { colorPrimary, colorSecondary, colorWhite } from "./variables";

export const BaseButton = styled.button`
  padding: 0.93rem 1.25rem;
  border: none;
  cursor: pointer;
  text-align: center;
`;
export const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  background: #f3ba00;
  border-radius: 0px 0.25rem 0.25rem 0px;
  color: #ffffff;
  font-size: 0.75rem;
  line-height: 1.25rem;
  padding: 0.3rem 0.93rem;
`;
export const EditButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${colorPrimary};
  border-radius: 0.25rem;
  color: ${colorWhite};
  font-size: 0.75rem;
  line-height: 1.25rem;
  padding: 0.3rem 0;
  width: 100%;
`;
export const UploadButton = styled.button`
  border: none;
  cursor: pointer;
  background: ${colorPrimary};
  border-radius: 0.25rem;
  color: ${colorWhite};
  font-size: 0.87rem;
  line-height: 1.25rem;
  padding: 0.3rem 0.93rem;
  width: fit-content;
`;

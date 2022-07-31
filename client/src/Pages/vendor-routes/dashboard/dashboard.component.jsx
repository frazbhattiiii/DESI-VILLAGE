import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Container } from "./dashboard.style";

export const Dashboard = () => {
  const navigation = useNavigate();
  const handleCreateMeal = () => {
    navigation("/vendor/create-meal");
  };
  return (
    <Container>
      <Button variant="outlined" onClick={handleCreateMeal}>
        Create Meal
      </Button>
    </Container>
  );
};

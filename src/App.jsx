import * as React from "react";
import { Container, Typography } from "@mui/material";
import SalesPieChart from "./components/SalesPieChart";

export default function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        MUI Pie Chart Demo
      </Typography>

      <SalesPieChart />
    </Container>
  );
}

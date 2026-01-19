import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Typography, Paper } from "@mui/material";

export default function SalesPieChart() {
  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Sales Distribution
      </Typography>

      <Box display="flex" justifyContent="center">
        <PieChart
          series={[
            {
              innerRadius: 50,
              outerRadius: 110,
              data: [
                { id: 0, value: 40, label: "Product A" },
                { id: 1, value: 30, label: "Product B" },
                { id: 2, value: 20, label: "Product C" },
                { id: 3, value: 10, label: "Product D" },
              ],
            },
          ]}
          height={300}
        />
      </Box>
    </Paper>
  );
}

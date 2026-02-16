import type { SkinCareItem } from "../types/type";
import { Chip, Box, Typography } from "@mui/material";

type Props = {
  item: SkinCareItem;
};

export const SelectedItem = ({ item }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffccff",
        border: "1px solid #f1f1f1",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
        width: "100%",
        height: "100%",
      }}
    >
      <Typography
        sx={{
          fontSize: "13px",
          color: "#9ca3af",
          marginBottom: "4px",
        }}
      >
        {item.brand}
      </Typography>
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: 500,
          color: "#2d2d2d",
          marginBottom: "12px",
        }}
      >
        {item.productName}
      </Typography>
      <Chip
        label={item.category}
        sx={{
          backgroundColor: "#f3e8ff",
          color: "#7c3aed",
          fontSize: "12px",
          marginBottom: "12px",
        }}
      />
      <Box>
        <Typography
          sx={{
            display: "inline-block",
            backgroundColor: "#111",
            color: "#fff",
            borderRadius: "999px",
            padding: "4px 10px",
            fontSize: "12px",
          }}
        >
          {item.evaluation}
        </Typography>
      </Box>
    </Box>
  );
};

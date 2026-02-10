import type { SkinCareItem } from "../types/type";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

type Props = {
  skinCareItems: SkinCareItem[];
};

export const SkinCareList = ({ skinCareItems }: Props) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>商品名</TableCell>
            <TableCell>ブランド</TableCell>
            <TableCell>カテゴリ</TableCell>
            <TableCell>総合評価</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {}
        </TableBody>
      </Table>
    </Box>
  );
};

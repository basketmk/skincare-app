import type { SkinCareItem } from "../types/type";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

type Props = {
  skinCareItems: SkinCareItem[];
  toggleSelectedItemId: (id: string) => void;
};

export const SkinCareList = ({
  skinCareItems,
  toggleSelectedItemId,
}: Props) => {
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
          {skinCareItems.map((item) => {
            return (
              <TableRow
                key={item.id}
                hover
                sx={{ cursor: "pointer" }}
                onClick={() => toggleSelectedItemId(item.id)}
              >
                <TableCell>{item.productName}</TableCell>
                <TableCell>{item.brand}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.evaluation}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
};

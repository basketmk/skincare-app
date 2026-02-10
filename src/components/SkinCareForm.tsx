import { useForm } from "react-hook-form";
import type { SkinCareItem, Screen } from "../types/type";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Button,
  FormControl,
  Stack,
  Typography,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

type Props = {
  onAdd: (item: SkinCareItem) => void;
  toggleScreen: (screen: Screen) => void;
};

export const SkinCareForm = ({ onAdd, toggleScreen }: Props) => {
  const { register, handleSubmit, reset } = useForm<SkinCareItem>({
    defaultValues: {
      productName: "",
      brand: "",
      category: "",
      evaluation: "",
    },
  });

  const evaluations = ["◎", "〇", "△", "×"];

  const onSubmit = (value: SkinCareItem) => {
    const productName = value.productName;
    const brand = value.brand;
    const category = value.category;
    const evaluation = value.evaluation;
    const id = uuidv4();

    const newItem = {
      productName,
      brand,
      category,
      evaluation,
      id,
    };
    onAdd(newItem);
    reset();
    toggleScreen("home");
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        入力フォーム
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} sx={{ maxWidth: 520 }}>
          <TextField label="商品名" fullWidth {...register("productName")} />
          <TextField label="ブランド" fullWidth {...register("brand")} />
          <TextField label="カテゴリ" fullWidth {...register("category")} />
          <FormControl fullWidth>
            <InputLabel id="evaluation-label">総合評価</InputLabel>
            <Select
              labelId="evaluation-label"
              label="総合評価"
              defaultValue=""
              {...register("evaluation")}
            >
              <MenuItem value="">
                <em>未選択</em>
              </MenuItem>
              {evaluations.map((e) => (
                <MenuItem key={e} value={e}>
                  {e}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" disableElevation type="submit">
            登録
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

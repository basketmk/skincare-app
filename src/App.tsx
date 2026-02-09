import { useState } from "react";
import "./App.css";
import { SkinCareList } from "./components/SkinCareList";
import type { Screen, SkinCareItem } from "./types/type";
import { SkinCareForm } from "./components/SkinCareForm";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [skinCareItems, setSkinCareItems] = useState<SkinCareItem[]>([]);

  const handleAddSkinCareItems = (item: SkinCareItem) => {
    setSkinCareItems((prev) => [...prev, item]);
  };

  const toggleScreen = (screen: Screen) => {
    setScreen(screen);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#11171b", color: "white", p: 1 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        スキンケア自分だけの評価ノート
      </Typography>

      {screen === "home" && (
        <Stack>
          <Button
            variant="outlined"
            sx={{ alignSelf: "flex-center", borderRadius: 2 }}
            onClick={() => toggleScreen("form")}
          >
            ＋新規登録
          </Button>
          <Grid container spacing={2}>
            <SkinCareList skinCareItems={skinCareItems} />
          </Grid>
        </Stack>
      )}

      {screen === "form" && (
        <Stack spacing={2}>
          <Button
            variant="outlined"
            sx={{ alighnSelf: "flex-start", borderRadius: 2 }}
            onClick={() => toggleScreen("home")}
          >
            戻る
          </Button>
          <SkinCareForm
            onAdd={handleAddSkinCareItems}
            toggleScreen={toggleScreen}
          />
        </Stack>
      )}
    </Box>
  );
}

export default App;

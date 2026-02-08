import { useState } from "react";
import "./App.css";
import { SkinCareList } from "./components/SkinCareList";
import type { Screen, SkinCareItem } from "./types/type";
import { SkinCareForm } from "./components/SkinCareForm";

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
    <div className="bg-pink-200 h-screen">
      <header className="font-bold text-2xl">
        スキンケア自分だけの評価ノート
      </header>

      {screen === "home" && (
        <div>
          <button
            className="border rounded-xl px-2 py-1 mt-1"
            onClick={() => toggleScreen("form")}
          >
            ＋新規登録
          </button>
          <div>
            <div className="grid grid-cols-3 gap-2 mx-1">
              <SkinCareList skinCareItems={skinCareItems} />
            </div>
          </div>
        </div>
      )}

      {screen === "form" && (
        <div>
          <button
            className="border rounded-xl px-2 py-1 mt-1"
            onClick={() => toggleScreen("home")}
          >
            戻る
          </button>
          <SkinCareForm
            onAdd={handleAddSkinCareItems}
            toggleScreen={toggleScreen}
          />
        </div>
      )}
    </div>
  );
}

export default App;

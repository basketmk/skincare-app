import { useForm } from "react-hook-form";
import type { SkinCareItem, Screen } from "../types/type";
import { v4 as uuidv4 } from "uuid";

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
    <div className="w-full">
      <div>入力フォーム</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center space-y-2">
          <div className="w-[50%]">
            <div className="flex items-center justify-between">
              <div className="w-[22%]">商品名 :</div>
              <input
                type="text"
                className="border border-black rounded-xl p-1 w-[78%]"
                {...register("productName")}
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="mr-2 w-[22%]">ブランド :</div>
              <input
                type="text"
                className="border border-black rounded-xl p-1 w-[78%]"
                {...register("brand")}
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="mr-2 w-[22%]">カテゴリ :</div>
              <input
                type="text"
                className="border border-black rounded-xl p-1 w-[78%]"
                {...register("category")}
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="mr-2 w-[22%]">総合評価 :</div>
              <select
                className="w-[78%] border rounded-xl"
                {...register("evaluation")}
              >
                <option value=""></option>
                {evaluations.map((e) => {
                  return <option>{e}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="ring rounded-xl w-[50%] p-2 mt-4 bg-green-300 cursor-pointer"
        >
          登録する
        </button>
      </form>
    </div>
  );
};

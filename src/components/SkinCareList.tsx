import type { SkinCareItem } from "../types/type";

type Props = {
  skinCareItems: SkinCareItem[];
};

export const SkinCareList = ({ skinCareItems }: Props) => {
  return (
    <>
      {skinCareItems.map((item: SkinCareItem) => {
        return (
          <div className="border rounded-xl px-1 py-2">
            <div key={item.id}>
              <div className="flex items-center justify-between px-5">
                <div>商品名：</div>
                <div>{item.productName}</div>
              </div>

              <div className="flex items-center justify-between px-5">
                <div>ブランド：</div>
                <div>{item.brand}</div>
              </div>

              <div className="flex items-center justify-between px-5">
                <div>カテゴリ：</div>
                <div>{item.category}</div>
              </div>

              <div className="flex items-center justify-between px-5">
                <div>総合評価：</div>
                <div>{item.evaluation}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

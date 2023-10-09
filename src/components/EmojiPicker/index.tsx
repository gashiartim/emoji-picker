import { FunctionComponent, useCallback, useState } from "react";
import Popover from "../shared/Popover/Popover";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { categories, emojis } from "./emojis";
import { EmojiCategory } from "../../typings";
import Categories from "./EmojiCategories";
import EmojiList from "./EmojiList";
import SkinToneSelector from "./SkinToneSelector";

interface Props {}

const EmojiPicker: FunctionComponent<Props> = () => {
  const [selectedCategory, setSelectedCategory] = useState<{
    categoryIndex: number;
    selectedCategory: EmojiCategory;
  }>({ categoryIndex: 0, selectedCategory: categories[0] });

  const [selectedSkinTone, setSelectedSkinTone] = useState<number>(0);

  const handleCategoryClick = useCallback(
    (index: number, category: EmojiCategory) => {
      setSelectedCategory({
        categoryIndex: index,
        selectedCategory: category,
      });
    },
    []
  );

  const handleSelectSkinTone = (skinTone: number) => {
    setSelectedSkinTone(skinTone);
  };

  return (
    <Popover
      button={
        <div className="bg-slate-600 p-2 rounded-md">
          <FaceSmileIcon className="w-5 h-5 text-white" />
        </div>
      }
    >
      <div className="bg-slate-600 text-white pb-2">
        <div className="p-2 pb-0">
          <Categories onCategoryClick={handleCategoryClick} />
        </div>
        <EmojiList
          categoryIndex={selectedCategory.categoryIndex}
          emojis={emojis}
          selectedSkinTone={selectedSkinTone}
        />
        <SkinToneSelector
          selectSkinTone={handleSelectSkinTone}
          selectedSkinTone={selectedSkinTone}
        />
      </div>
    </Popover>
  );
};

export default EmojiPicker;

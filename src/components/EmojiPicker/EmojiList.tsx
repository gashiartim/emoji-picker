import { FunctionComponent } from "react";
import { Emoji, categories } from "./emojis";

import EmojisTab from "./EmojisTab";
import AllEmojisTab from "./AllEmojisTab";

interface Props {
  categoryIndex: number;
  emojis: Emoji[][];
  selectedSkinTone: number;
}

const EmojiList: FunctionComponent<Props> = ({
  categoryIndex,
  emojis,
  selectedSkinTone,
}) => {
  const searchTab = categoryIndex === 0;

  return (
    <div className="p-2">
      {!searchTab && (
        <div className="font-medium text-sm pb-5">
          {categories[categoryIndex]}
        </div>
      )}
      {searchTab ? (
        <AllEmojisTab emojis={emojis} selectedCategory={categoryIndex} />
      ) : (
        <EmojisTab
          emojis={emojis[categoryIndex - 1]}
          selectedSkinTone={selectedSkinTone}
        />
      )}
    </div>
  );
};

export default EmojiList;

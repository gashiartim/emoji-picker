import { FunctionComponent } from "react";
import { Emoji } from "./emojis";

import EmojiComponent from "./EmojiComponent";

interface Props {
  emojis: Emoji[];
  selectedSkinTone: number;
}

const EmojisTab: FunctionComponent<Props> = ({ emojis, selectedSkinTone }) => {
  return (
    <div className="grid grid-cols-9 px-2 overflow-y-auto gap-x-5 gap-y-2 max-h-60">
      {emojis?.map((emoji) => (
        <button
          key={`emoji-${emoji.id}`}
          onClick={() => console.log(emoji)}
          aria-label={emoji.keywords?.join(" ")}
          className="w-5 h-5 transition-colors duration-100 ease-in-out rounded-md focus:outline-none focus:ring focus:border-blue-300 hover:bg-slate-500"
        >
          <EmojiComponent emoji={emoji} skinTone={selectedSkinTone} />
        </button>
      ))}
    </div>
  );
};

export default EmojisTab;

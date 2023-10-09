import { CSSProperties, ChangeEvent, FunctionComponent, useState } from "react";
import { Emoji } from "./emojis";
import { EmojiCategory } from "../../typings";
import { List, AutoSizer } from "react-virtualized";
import { useDebounce } from "../../lib/useDebounce";

interface Props {
  emojis: Emoji[][];
  selectedCategory: EmojiCategory;
}

const AllEmojisTab: FunctionComponent<Props> = ({ emojis }) => {
  const [search, setSearch] = useState<string>("");

  const debouncedSearchTerm = useDebounce(search, 500);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const allEmojis = emojis.flat();

  const filteredEmojis = allEmojis.filter((emoji) =>
    emoji.keywords?.some((keyword) =>
      keyword.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    )
  );

  const rowHeight = 30;
  const emojiPerRow = 9;
  const rowRenderer = ({
    index,
    key,
    style,
  }: {
    index: number;
    key: string;
    style: CSSProperties;
  }) => {
    const emojisToRender = filteredEmojis.slice(
      index * emojiPerRow,
      index * emojiPerRow + emojiPerRow
    );

    return (
      <div
        key={key}
        style={style}
        className="grid grid-cols-9 px-2 gap-x-5 gap-y-2"
      >
        {emojisToRender.map((emoji) => (
          <button
            key={`emoji-${emoji.id}`}
            onClick={() => console.log(emoji)}
            aria-label={emoji.keywords?.join(" ")}
            className="w-5 h-5 transition-colors duration-100 ease-in-out rounded-md focus:outline-none focus:ring focus:border-blue-300 hover:bg-slate-500"
          >
            <img
              src={`https://static.neuronapp.io/emojis/${emoji.id}.svg`}
              alt={emoji.keywords?.join(" ")}
              className="w-5 h-5 cursor-pointer"
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
        className="w-full p-2 bg-transparent border rounded-md border-b-gray-500"
      />
      <div className="min-h-[235px]">
        <AutoSizer className="h-full">
          {({ width, height }) => {
            return (
              <List
                width={width}
                height={height}
                rowCount={Math.ceil(filteredEmojis.length / emojiPerRow)}
                rowHeight={rowHeight}
                rowRenderer={rowRenderer}
                className="py-2"
              />
            );
          }}
        </AutoSizer>
      </div>
    </div>
  );
};

export default AllEmojisTab;

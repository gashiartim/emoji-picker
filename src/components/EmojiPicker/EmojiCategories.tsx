import { FunctionComponent } from "react";
import { EmojiCategory } from "../../typings";
import { categories, categoriesIcons } from "./emojis";

interface Props {
  onCategoryClick: (index: number, category: EmojiCategory) => void;
}

const EmojiCategories: FunctionComponent<Props> = ({ onCategoryClick }) => (
  <ul className="flex justify-between border-b border-gray-500">
    {categories.map((category, i) => (
      <li
        key={`icon-category-${i}`}
        className="p-1 cursor-pointer hover:bg-slate-500 rounded-md transition-colors ease-in-out duration-100"
        onClick={() => onCategoryClick(i, category)}
      >
        {categoriesIcons[`${category}`]}
      </li>
    ))}
  </ul>
);

export default EmojiCategories;

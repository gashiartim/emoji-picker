import { FunctionComponent } from "react";

interface Props {
  selectedSkinTone: number;
  selectSkinTone: (skinTone: number) => void;
}

const SkinToneSelector: FunctionComponent<Props> = ({
  selectedSkinTone,
  selectSkinTone,
}) => {
  const skins = [
    "01h37jbxq11hpcnw1mdfgmm70vem",
    "01h37jbxq11hpcnw1mdfgmm70wem",
    "01h37jbxq11hpcnw1mdfgmm70xem",
    "01h37jbxq11hpcnw1mdfgmm70yem",
    "01h37jbxq11hpcnw1mdfgmm70zem",
    "01h37jbxq11hpcnw1mdfgmm710em",
  ];

  return (
    <div className="flex justify-between px-2 text-sm">
      <span>Change color</span>
      <div className="flex gap-x-3">
        {skins.map((skin, idx) => (
          <button
            key={`skin-selector-${skin}`}
            className={`w-5 h-5 ${idx === selectedSkinTone && "bg-slate-500"}`}
            onClick={() => selectSkinTone(idx)}
          >
            <img
              src={`https://static.neuronapp.io/emojis/${skin}.svg`}
              className="w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SkinToneSelector;

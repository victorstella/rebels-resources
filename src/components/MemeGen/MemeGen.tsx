import { ChangeEvent, ReactNode } from 'react';

type MemeGenProps = {
  generateMeme: () => void;
  setTopText: (text: string) => void;
  setBottomText: (text: string) => void;
  topText: string;
  bottomText: string;
  finalMeme: ReactNode;
};

export function MemeGen({
  generateMeme,
  setTopText,
  setBottomText,
  topText,
  bottomText,
  finalMeme,
}: MemeGenProps) {
  return (
    <div className="w-[95%] md:w-[80%] lg:w-[60%] mx-auto my-5 px-4 pb-4 pt-6 flex flex-col border-[3px] border-sky-400 hover:border-indigo-600 text-[#ffe81f] bg-black transition-colors duration-200">
      <h2 className="font-bold text-2xl">Generator</h2>
      <div className="flex flex-col items-center my-4 mx-3">
        <input
          type="text"
          name="topText"
          className="w-[95%] md:w-[80%] xl:w-[70%] px-3 py-2 my-2 border border-gray-400 rounded text-white focus:outline-none focus:border-teal-400"
          value={topText}
          placeholder="Top Text"
          onChange={(e) => setTopText(e.target.value)}
        />
        <input
          type="text"
          name="bottomText"
          className="w-[95%] md:w-[80%] xl:w-[70%] px-3 py-2 my-2 border border-gray-400 rounded text-white focus:outline-none focus:border-teal-400"
          value={bottomText}
          placeholder="Bottom Text"
          onChange={(e) => setBottomText(e.target.value)}
        />
        <button
          className="bg-teal-300 hover:bg-teal-400 text-gray-700 font-bold px-4 py-2 rounded mt-3 cursor-pointer transition-colors duration-150"
          onClick={generateMeme}
        >
          Create
        </button>
      </div>
      {finalMeme}
    </div>
  );
}

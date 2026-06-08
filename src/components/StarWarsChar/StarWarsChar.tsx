import { SWChar } from './types';
import SWLogo from '/Star-Wars.png';

type StarWarsCharProps = {
  SWChar: SWChar;
  SWCharSearch: string;
  setSWCharSearch: (value: string) => void;
  searchChar: () => void;
};

export function StarWarsChar({
  SWChar,
  SWCharSearch,
  setSWCharSearch,
  searchChar,
}: StarWarsCharProps) {
  return (
    <div className="w-[95%] md:w-[80%] lg:w-[60%] mx-auto mt-5 mb-12 py-8 px-10 flex flex-col border-[3px] border-cyan-400 hover:border-fuchsia-500 bg-black transition-colors duration-200">
      <div className="grid grid-cols-2 gap-4 items-center">
        <img
          src={SWLogo}
          alt="Star Wars"
          className="w-[70%] justify-self-center"
        />
        <div className="flex flex-col items-center gap-3">
          <p className="self-center font-bold text-lg md:text-2xl text-yellow-300">
            Character Search
          </p>
          <input
            type="text"
            name="SWCharSearch"
            className="w-[95%] md:w-[80%] xl:w-[70%] px-3 py-2 my-2 border border-gray-400 rounded text-white focus:outline-none focus:border-teal-400"
            value={SWCharSearch}
            placeholder="Search Characters"
            onChange={(e) => setSWCharSearch(e.target.value)}
          />
          <button
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 border border-cyan-700 rounded cursor-pointer"
            onClick={searchChar}
          >
            Search
          </button>
        </div>
      </div>
      <hr className="my-8 border-fuchsia-500 w-full" />
      <div className="grid grid-cols-2 gap-4">
        {Object.values(SWChar).map((element, index) => (
          <div className="flex justify-center py-1 text-teal-300" key={index}>
            <h5>{element}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

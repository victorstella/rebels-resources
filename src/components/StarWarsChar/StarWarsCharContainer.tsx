import { useEffect, useState } from 'react';
import axios from 'axios';
import { StarWarsChar } from './StarWarsChar';
import { SWChar } from './types';

function formatChar(char: SWChar) {
  const charKeys = Object.keys(char).slice(0, 8);
  const charValues = Object.values(char).slice(0, 8);
  const result: SWChar = {};
  charKeys.forEach((rawKey, i) => {
    const formattedKey =
      rawKey.replace(/_/g, ' ').charAt(0).toUpperCase() +
      rawKey.replace(/_/g, ' ').slice(1);
    const formattedValue =
      charValues[i].charAt(0).toUpperCase() + charValues[i].slice(1);
    if (i === 1 && formattedValue !== 'Unknown') {
      result[formattedKey] = `${formattedKey}: ${formattedValue} cm`;
    } else if (i === 2 && formattedValue !== 'Unknown') {
      result[formattedKey] = `${formattedKey}: ${formattedValue} Kg`;
    } else {
      result[formattedKey] = `${formattedKey}: ${formattedValue}`;
    }
  });
  return result;
}

export function StarWarsCharContainer() {
  const [SWChar, setSWChar] = useState<SWChar>({});
  const [searchResults, setSearchResults] = useState<SWChar[]>([]);
  const [SWCharSearch, setSWCharSearch] = useState('');

  function searchChar() {
    const found = searchResults.find((char) =>
      char.name?.toLowerCase().includes(SWCharSearch.toLowerCase()),
    );
    if (found) setSWChar(formatChar(found));
  }

  useEffect(() => {
    axios.get<SWChar[]>('https://swapi.info/api/people').then((res) => {
      setSearchResults(res.data);
      const randChar = res.data[Math.floor(Math.random() * res.data.length)];
      if (randChar) setSWChar(formatChar(randChar));
    });
  }, []);

  return (
    <StarWarsChar
      SWChar={SWChar}
      SWCharSearch={SWCharSearch}
      setSWCharSearch={setSWCharSearch}
      searchChar={searchChar}
    />
  );
}

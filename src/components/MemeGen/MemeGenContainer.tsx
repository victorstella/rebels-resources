import { ReactNode, useState, useEffect } from 'react';
import { MemeGen } from './MemeGen';
import axios from 'axios';
import { MemeTemplate } from './types';

const encode = (chars: string[]): string =>
  chars
    .map((c) => {
      if (c === '_') return '__';
      if (c === ' ') return '_';
      if (c === '-') return '--';
      if (c === '?') return '~q';
      if (c === '#') return '~h';
      if (c === '%') return '~p';
      if (c === '/') return '~s';
      if (c === '"') return "''";
      return c;
    })
    .join('');

export default function MemeGenContainer() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memesTemplates, setMemesTemplates] = useState<MemeTemplate[]>([]);
  const [finalMeme, setFinalMeme] = useState<ReactNode>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('https://api.memegen.link/templates').then((response) => {
      setMemesTemplates(Object.values(response.data));
    });
  }, []);

  const generateMeme = () => {
    const randPosition =
      Math.floor(Math.random() * memesTemplates.length - 1) + 1;
    const randTemplateUrl = memesTemplates[randPosition].id;
    const templateUrl = `https://api.memegen.link/images/${randTemplateUrl}/`;

    setTimeout(() => {
      setFinalMeme(
        <img
          src={`${templateUrl}${encode(topText.split(''))}/${encode(bottomText.split(''))}.jpg`}
          alt="Your Meme"
          className="border border-pink-400"
        />,
      );
      setTopText('');
      setBottomText('');
      setLoading(false);
    }, 2000);
  };

  return (
    <MemeGen
      topText={topText}
      bottomText={bottomText}
      finalMeme={finalMeme}
      loading={loading}
      setTopText={setTopText}
      setBottomText={setBottomText}
      generateMeme={generateMeme}
      setLoading={setLoading}
    />
  );
}

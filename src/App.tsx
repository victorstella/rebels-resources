import './global.css';
import { Analytics } from '@vercel/analytics/react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import MemeGenContainer from './components/MemeGen/MemeGenContainer';
import { StarWarsCharContainer } from './components/StarWarsChar/StarWarsCharContainer';
import { StarField } from './components/StarField';

export default function App() {
  return (
    <div className="relative text-center bg-slate-950 min-h-screen flex flex-col items-center text-white">
      <StarField />
      <div className="relative z-10 w-full flex flex-col items-center">
        <Header />
        <Home />
        <div className="w-full flex flex-col">
          <MemeGenContainer />
          <StarWarsCharContainer />
        </div>
      </div>
      <Analytics />
    </div>
  );
}

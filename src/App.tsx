import './global.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import MemeGenContainer from './components/MemeGen/MemeGenContainer';
import { StarWarsCharContainer } from './components/StarWarsChar/StarWarsCharContainer';

export default function App() {
  return (
    <div className="text-center bg-slate-950 min-h-screen flex flex-col items-center text-white">
      <Header />
      <Home />
      <div className="w-full flex flex-col">
        <MemeGenContainer />
        <StarWarsCharContainer />
      </div>
    </div>
  );
}

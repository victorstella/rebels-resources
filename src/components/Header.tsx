import logoRebels from '/rebel-alliance.png';
import logoJedi from '/jedi-order.png';

export function Header() {
  return (
    <header className="w-full h-14 md:h-16 bg-sky-800 flex items-center justify-center shrink-0 gap-6">
      <img
        src={logoRebels}
        alt="Rebel Alliance"
        className="w-12 md:w-14 h-auto"
      />
      <h2 className="my-auto text-yellow-400 text-xl md:text-3xl font-semibold">
        Rebel Alliance's Resources
      </h2>
      <img src={logoJedi} alt="Jedi Order" className="w-13 md:w-15 h-auto" />
    </header>
  );
}

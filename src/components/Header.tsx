import logoJedi from '/jedi-order.png';

export function Header() {
  return (
    <header className="w-full py-0.5 h-fit bg-teal-700 flex items-center justify-center shrink-0 gap-6">
      <img src={logoJedi} alt="Jedi" width="50px" height="auto" />
      <h2 className="my-auto text-yellow-300 text-xl md:text-3xl font-semibold">
        Rebel Alliance's Resources
      </h2>
      <img src={logoJedi} alt="Jedi" width="48px" height="auto" />
    </header>
  );
}

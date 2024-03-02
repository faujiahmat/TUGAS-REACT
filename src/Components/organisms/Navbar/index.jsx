import SearchBar from '../../atomics/SearchBar';

export default function Navbar() {
  return (
    <header className="h-16 text-cyan-950  flex justify-between">
      <div className="font-semibold text-3xl text-red-300">Food Recipe</div>
      <SearchBar />
      <nav>
        <ul className="flex gap-5">
          <li>about me</li>
          <li>contact me</li>
        </ul>
      </nav>
    </header>
  );
}

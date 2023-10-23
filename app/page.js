export default function Home() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="border-b border-gray-800 sticky top-0 bg-violet-300 text-gray-100 z-10">
      <div>
        <h1 className="flex space-x-4">
          Eric Cho
        </h1>
        <a href="/about" className="flex justify-end space-x-4 text-sm font-medium">
          About
        </a>
        <a href="/career" className="space-x-4">
          Career
        </a>
        <a href="/projects" className="">
          Projects
        </a>
      </div>
    </nav>
  );
}

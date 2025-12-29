export default function Navbar() {
  return (
    <nav className=" mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-2xl">
            <div className="bg-zinc-900 p-1 rounded-md text-white">▲</div>
             Positivus
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium">
            {['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'].map((item) => (
                <a key={item} href="#" className="hover:underline">{item}</a>
            ))}
            <button className="border border-zinc-900 px-6 py-3 rounded-xl hover:bg-zinc-900 hover:text-white transition-all">
                Request a quote
            </button>
        </div>
    </nav>
  )
}
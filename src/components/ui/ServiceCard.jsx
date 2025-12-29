export default function ServiceCard({ title, variant = 'gray', image }) {
    const themes = {
        gray: 'bg-zinc-100 text-zinc-900',
        lime: 'bg-[#B9FF66] text-zinc-900',
        dark: 'bg-zinc-900 text-white',
    };

    const labelThemes = {
        gray: 'bg-[#B9FF66]',
        lime: 'bg-white',
        dark: 'bg-white text-zinc-900',
    };
    return (
        <div className={`p-10 rounded-[40px] border border-zinc-900 flex justify-between shadow-[0_5px_0_0_rgba(24,24,27,1)] ${themes[variant]}`}>
            <div className="flex flex-col justify-between">
                <h3 className={`text-2xl font-bold p-1 rounded-lg inline-block w-fit ${labelThemes[variant]}`}>
                {title}
                </h3>
                <div className="flex items-center gap-4 cursor-pointer group">
                <div className={`p-2 rounded-full transition-colors ${variant === 'dark' ? 'bg-white text-zinc-900' : 'bg-zinc-900 text-[#B9FF66]'}`}>
                    <ArrowUpRight size={20} />
                </div>
                <span className="font-medium">Learn more</span>
                </div>
            </div>
            <div className="w-32 h-32 flex items-center justify-center">
                {/* Replace with your specific SVG illustrations */}
                <img src={image} alt={title} className="max-w-full" />
            </div>
        </div>
    );
}
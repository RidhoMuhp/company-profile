export default function SectionHeader({ title, subtitle }) {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <h2 className="bg-[#B9FF66] px-2 text-3xl font-bold rounded-md uppercase">{title}</h2>
            <p className="max-w-md text-zinc-600">{subtitle}</p>
        </div>
    );
}
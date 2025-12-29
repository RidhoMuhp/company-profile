export default function Hero() {
    return (
        <section className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 py-16 items-center">
            <div >
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                    Navigating the digital landscape for success
                </h1>
                <p className="text-lg text-zinc-600 mb-8 pl-15 max-w-lg">
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </p>
                <button className="bg-zinc-900 text-white px-8 py-4 rounded-xl text-lg font-medium">
                    Book a consultation
                </button>
            </div>
            <div className="relative">
                {/* Replace with your illustration SVG/Image */}
                <img src="/hero-illustration.png" alt="Hero Illustration" className="w-full" />
            </div>
        </section>
    );
}
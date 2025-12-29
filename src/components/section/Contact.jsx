export default function Contact() {
    return (
        <section className="py-20" id="contact">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                <h2 className="bg-[#B9FF66] px-2 text-3xl font-bold rounded-md uppercase">Contact Us</h2>
                <p className="max-w-md text-zinc-600">Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
            </div>

            <div className="bg-zinc-100 rounded-[40px] p-8 md:p-16 flex relative overflow-hidden">
                <div className="w-full md:w-1/2">
                <form className="space-y-6">
                    <div className="flex gap-8 mb-8">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="type" className="accent-zinc-900 w-5 h-5" defaultChecked /> Say Hi
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="type" className="accent-zinc-900 w-5 h-5" /> Get a Quote
                    </label>
                    </div>
                    
                    <div>
                    <label className="block mb-2 font-medium">Name</label>
                    <input type="text" placeholder="Name" className="w-full p-4 rounded-xl border border-zinc-900 bg-white" />
                    </div>
                    
                    <div>
                    <label className="block mb-2 font-medium">Email*</label>
                    <input type="email" placeholder="Email" className="w-full p-4 rounded-xl border border-zinc-900 bg-white" />
                    </div>

                    <div>
                    <label className="block mb-2 font-medium">Message*</label>
                    <textarea placeholder="Message" rows="5" className="w-full p-4 rounded-xl border border-zinc-900 bg-white"></textarea>
                    </div>

                    <button className="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-zinc-800 transition-colors">
                    Send Message
                    </button>
                </form>
                </div>
                
                {/* The abstract illustration on the right */}
                <div className="hidden md:block md:w-1/2 absolute -right-20 top-0 h-full">
                <img src="/contact-illustration.png" alt="Illustration" className="h-full object-contain" />
                </div>
            </div>
        </section>
    );
}
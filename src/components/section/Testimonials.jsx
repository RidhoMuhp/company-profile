import { ArrowLeft, ArrowRight } from 'lucide-react';
export default function Testimonials() {
    return (
        <section className="py-20">
            <div className="bg-zinc-900 rounded-[40px] py-16 px-8 md:px-20 text-white relative overflow-hidden">
                <div className="flex gap-8 overflow-x-auto pb-12 snap-x">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="min-w-[100%] md:min-w-[400px] snap-center">
                    <div className="relative border border-[#B9FF66] rounded-[40px] p-8 mb-8">
                        <p className="text-lg italic">
                        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business."
                        </p>
                        {/* Speech Bubble Tail */}
                        <div className="absolute -bottom-4 left-12 w-8 h-8 bg-zinc-900 border-r border-b border-[#B9FF66] rotate-45"></div>
                    </div>
                    <div className="ml-16">
                        <h4 className="text-[#B9FF66] font-bold">John Smith</h4>
                        <p className="text-sm">Marketing Director at XYZ Corp</p>
                    </div>
                    </div>
                ))}
                </div>
                
                <div className="flex justify-center items-center gap-12 mt-8">
                <ArrowLeft className="cursor-pointer hover:text-[#B9FF66]" />
                <div className="flex gap-2">
                    {[1,2,3,4,5].map(dot => <div key={dot} className={`w-3 h-3 rotate-45 ${dot === 1 ? 'bg-[#B9FF66]' : 'border border-white'}`} />)}
                </div>
                <ArrowRight className="cursor-pointer hover:text-[#B9FF66]" />
                </div>
            </div>
        </section>
    );
}
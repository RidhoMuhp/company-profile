import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ titleLine1, titleLine2, variant = 'gray', imageSrc }) {
  // Define styles based on the variant prop
  const themes = {
    gray: {
      card: 'bg-[#F3F3F3] text-black',
      title: 'bg-[#B9FF66]',
      btnBg: 'bg-black text-[#B9FF66]',
      btnText: 'text-black'
    },
    lime: {
      card: 'bg-[#B9FF66] text-black',
      title: 'bg-white',
      btnBg: 'bg-black text-[#B9FF66]',
      btnText: 'text-black'
    },
    dark: {
      card: 'bg-[#191A23] text-white',
      title: 'bg-white text-black',
      btnBg: 'bg-white text-[#191A23]',
      btnText: 'text-white'
    }
  };

  const theme = themes[variant];

  return (
    <div className={`${theme.card} p-10 rounded-[45px] border border-black shadow-[0px_5px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center min-h-[200px] transition-all hover:shadow-none hover:translate-y-1`}>
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col">
          <span className={`${theme.title} text-2xl font-bold px-1.5 rounded-md w-fit`}>
            {titleLine1}
          </span>
          <span className={`${theme.title} text-2xl font-bold px-1.5 rounded-md w-fit mt-1`}>
            {titleLine2}
          </span>
        </div>

        <div className="flex items-center gap-4 group cursor-pointer">
          <div className={`${theme.btnBg} p-2 rounded-full transition-transform group-hover:rotate-45`}>
            <ArrowUpRight size={24} />
          </div>
          <span className={`${theme.btnText} text-lg font-medium hidden md:inline`}>Learn more</span>
        </div>
      </div>

      <div className="w-1/2 flex justify-end">
        <img 
          src={imageSrc} 
          alt={titleLine1} 
          className="max-w-[180px] object-contain"
        />
      </div>
    </div>
  );
};


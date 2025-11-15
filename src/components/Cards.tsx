"use client";
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Cards() {
  const cards = [
    { icon: "📕",
         title: "We don’t follow trends.", 
         subtitle: "We design what prop trading should feel like" },
    { icon: "📘",
         title: "Trade with clarity.", 
         subtitle: "Every rule exists to empower, not restrict." },
    { icon: "📗",
         title: "Every parameter makes sense.",
          subtitle: "Transparent balanced and fair from day one." },
    { icon: "📙",
         title: "Grow without limits.",
          subtitle: "The better you perform, the more we scale with you." },
    { icon: "📔",
         title: "You focus on the charts.",
         subtitle: "We handle everything else from funding to payouts." },
    { icon: "📓", 
        title: "No distractions. No noise.",
        subtitle: "Small edges create big results." }
  ]

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  return (
    <div className="min-h-[200vh] bg-black p-10 flex flex-col items-center">

     
      <div className="sticky top-20 z-40 flex justify-center w-full">
        <motion.div
          className="w-[600px] h-[180px] rounded-2xl bg-gradient-to-tr from-black via-gray-900 to-amber-900/40 
                     border border-[#1c1c1c] shadow-xl p-6 flex flex-col justify-between relative"
        >
          <div className="absolute right-0 top-0 w-[60%] h-full bg-gradient-to-br 
                          from-[#c47a43]/70 to-transparent blur-[160px] opacity-90" />

          <div className="w-12 h-12 rounded-xl bg-[#141414] border border-[#2a2a2a] 
                          flex items-center justify-center text-red-500 text-2xl z-10">
            {cards[0].icon}
          </div>

          <div className="flex flex-col z-10">
            <h2 className="text-white text-2xl font-semibold">{cards[0].title}</h2>
            <p className="text-gray-400 text-sm mt-1">{cards[0].subtitle}</p>
          </div>
        </motion.div>
      </div>

      <div ref={scrollRef} className="mt-20 space-y-20 w-full flex flex-col items-center">
        {cards.slice(1).map((card, i) => {
          const moveY = useTransform(scrollYProgress, [0, 1], [180 * (i + 1), -100]);

          return (
            <motion.div
              key={i}
              style={{ y: moveY }}
              className="w-[600px] h-[180px] rounded-2xl bg-gradient-to-tr from-black via-gray-900 to-amber-900/40 
                         border border-[#1c1c1c] shadow-xl p-6 flex flex-col justify-between relative 
                         -mt-[150px] z-10"
            >
              <div className="absolute right-0 top-0 w-[60%] h-full bg-gradient-to-br 
                              from-[#c47a43]/70 to-transparent blur-[160px] opacity-90" />

              <div className="w-12 h-12 rounded-xl bg-[#141414] border border-[#2a2a2a] 
                              flex items-center justify-center text-red-500 text-2xl z-10">
                {card.icon}
              </div>

              <div className="flex flex-col z-10">
                <h2 className="text-white text-2xl font-semibold">{card.title}</h2>
                <p className="text-gray-400 text-sm mt-1">{card.subtitle}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  )
}

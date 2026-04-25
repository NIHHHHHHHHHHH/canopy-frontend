'use client'

import { useState, useEffect } from "react";
import { Apple, Heart, Share2 } from "lucide-react";

const SLIDES = [
  {
    id: 0,
    imgUrl: "https://images.unsplash.com/photo-1746568450302-41cfe1065ce3?q=80&w=687&auto=format&fit=crop",
    imgGradient: "linear-gradient(135deg, var(--color-bg-container) 0%, var(--color-bg-light) 100%)",
    title: "Strawberry Vanilla Sparkling Tonic",
    brand: "Olipop",
    score: 100,
    label: "Excellent",
    oliver: "This drink's high score is thanks to its simple and wholesome ingredients like strawberry juice and natural fibers, with no harmful additives or processed sugars, making it a great choice for your kids while still feeling like a treat!",
  },
  {
    id: 1,
    imgUrl: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&auto=format&fit=crop",
    imgGradient: "linear-gradient(135deg, var(--color-bg-light) 0%, var(--color-bg-container) 100%)",
    title: "Late July Snacks Thin and Crispy Organic Tortilla",
    brand: "Late July",
    score: 58,
    label: "Limit",
    oliver: "This snack's score is primarily affected by the presence of organic sunflower oil and safflower oil, which are considered seed oils and can be less healthy for your family.",
  },
  {
    id: 2,
    imgUrl: "https://images.unsplash.com/photo-1542843137-8791a6904d14?q=80&w=1170&auto=format&fit=crop",
    imgGradient: "linear-gradient(135deg, var(--color-bg-container) 0%, var(--color-bg-light) 100%)",
    title: "Larabar Chocolate Chip Cookie Dough Fruit & Nut",
    brand: "Larabar",
    score: 92,
    label: "Excellent",
    oliver: "This product, which includes ingredients like cashews and dates, scored well mainly because it doesn't contain processed sugars, harmful additives, or seed oils, making it a healthier choice for your family, especially as an occasional treat.",
  },
  {
    id: 3,
    imgUrl: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=300&auto=format&fit=crop",
    imgGradient: "linear-gradient(135deg, var(--color-bg-light) 0%, var(--color-bg-container) 100%)",
    title: "Cacao-nectar Bar, Oregon Peppermint",
    brand: "Honey Mama's",
    score: 85,
    label: "Excellent",
    oliver: "This treat scored well mainly because it uses wholesome ingredients like raw local honey and organic coconut, but it still has processed sugars from the honey, which can be a concern when looking to avoid processed foods for your family. ",
  },
  {
    id: 4,
    imgUrl: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=300&auto=format&fit=crop",
    imgGradient: "linear-gradient(135deg, var(--color-bg-container) 0%, var(--color-bg-light) 100%)",
    title: "Sourlittles",
    brand: "YumEarth",
    score: 84,
    label: "Excellent",
    oliver: "This product's score is impacted mainly by the presence of processed sugars like organic cane sugar and organic rice syrup, which can be concerning for your family's health, especially since you prefer to avoid processed foods and harmful additives.",
  },
];

const users = [
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=100&auto=format&fit=crop",
];

function scoreColor(score) {
  if (score >= 80) return "bg-green-500";
  if (score >= 60) return "bg-amber-500";
  return "bg-red-500";
}

function ProductCard({ slide, visible }) {
  return (
    <div
      className={`absolute top-36 left-0 right-0 bottom-0 bg-bg-page rounded-t-3xl z-50 overflow-hidden  shadow-card-top  transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
    
      <div className="flex justify-center pt-3 pb-2">
        <div className="w-8 h-1 bg-border-light rounded-3xl" />
      </div>
   
      <div className="px-4 pb-8">
        <div className="flex gap-3 mb-3">
          <div className="w-14 h-14 rounded-xl overflow-hidden bg-bg-light shrink-0 border border-border-light">
            <img src={slide.imgUrl} alt={slide.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-text-headline text-base leading-snug line-clamp-2">{slide.title}</h3>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full shrink-0 ${scoreColor(slide.score)}`} />
            <div>
              <span className="font-bold text-text-headline text-base">{slide.score}/100</span>
              <br />
              <span className="text-xs text-text-muted leading-none">{slide.label}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-border-light hover:text-text-muted transition-colors"><Heart className="w-5 h-5" /></button>
            <button className="text-border-light hover:text-text-muted transition-colors"><Share2 className="w-5 h-5" /></button>
          </div>
        </div>

        <div className="bg-bg-page rounded-2xl p-3.5 min-h-fit shadow-xl">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-bold text-xs text-text-nav uppercase tracking-wider ">Oliver Says:</span>
          </div>
          <p className="text-xs text-text-nav leading-relaxed wrap-break-word">"{slide.oliver}"</p>
        </div>
        <p className="text-sm font-semibold text-text-headline mt-3">Breakdown</p>
      </div>
    </div>
  );
}

function PhoneMockup({ currentIdx }) {
  const [cardVisible, setCardVisible] = useState(false);
  const [isSmall, setIsSmall] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 640
  );

  useEffect(() => {
    const handler = () => setIsSmall(window.innerWidth < 640);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    setCardVisible(false);
    // delay lets the slide transition finish before card animates in
    const t = setTimeout(() => setCardVisible(true), 400);
    return () => clearTimeout(t);
  }, [currentIdx]);

  const getIdx = (offset) => (currentIdx + offset + SLIDES.length) % SLIDES.length;

  const cardOrder = isSmall
    ? [
        { idx: getIdx(-1), pos: "left-inner" },
        { idx: getIdx(0), pos: "center" },
        { idx: getIdx(1), pos: "right-inner" },
      ]
    : [
        { idx: getIdx(-2), pos: "left-ghost" },
        { idx: getIdx(-1), pos: "left-inner" },
        { idx: getIdx(0), pos: "center" },
        { idx: getIdx(1), pos: "right-inner" },
        { idx: getIdx(2), pos: "right-ghost" },
      ];

  return (
    <div className="relative w-full bg-bg-page max-w-80 h-125 flex items-center justify-center mx-auto overflow-visible">
      <div className="absolute inset-0 flex items-start justify-center gap-6 z-10 pointer-events-none mt-12">
        {cardOrder.map((item) => {
          const isCenter = item.pos === "center";
          const isGhost = item.pos.includes("ghost");

          return (
            <div
              key={item.idx}
              className={` transition-all duration-700 ease-in-out flex items-center justify-center rounded-3xl shrink-0 shadow-lg overflow-hidden
                ${isCenter ? "w-30 h-30 opacity-100 z-30" : "w-20 h-20 opacity-30 z-10 grayscale-[0.5]"}
                ${isGhost ? "blur-[1px]" : ""}
              `}
              style={{ background: SLIDES[item.idx].imgGradient }}
            >
              <img
                src={SLIDES[item.idx].imgUrl}
                alt={SLIDES[item.idx].title}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>

      <div className="relative w-80 h-140 bg-transparent rounded-t-[40px] border-10 border-b-0 border-border-light shadow-2xl overflow-hidden z-20">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-3xl z-5" />
        <div className="absolute inset-0">
          <ProductCard slide={SLIDES[currentIdx]} visible={cardVisible} />
        </div>
      </div>
    </div>
  );
}

function SocialProof() {
  return (
    <div className="flex items-center gap-3 mb-10">
      <div className="flex -space-x-3">
        {users.map((url, i) => (
          <div key={i}
            className="relative w-9 h-9 rounded-full border-2 border-border-light bg-transparent overflow-hidden shadow-sm transition-all duration-300 ease-out hover:scale-105 hover:z-50 cursor-pointer">
            <img src={url} alt="User" className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="relative w-9 h-9 rounded-full border-2 border-border-light bg-bg-light flex items-center justify-center text-sm text-text-muted">3k+</div>
      </div>
      <p className="text-xs text-text-muted">Trusted by thousands of healthy families</p>
    </div>
  );
}

export default function HeroSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="min-h-screen bg-bg-container pt-12 px-6 flex flex-col items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}>
      <SocialProof />

      <h1 className="text-center mb-10 text-text-headline text-5xl sm:text-6xl md:text-7xl leading-none tracking-tight font-semibold">The Safest Way to<br />Shop for Groceries</h1>
      <p className="text-text-muted text-center max-w-md text-base sm:text-lg leading-relaxed mb-10"> Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family's Diet and Get Expert-Backed Food Insights</p>

       <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-btn bg-text-headline text-btn-primary-text text-sm font-semibold tracking-wide shadow-md hover:bg-text-nav hover:shadow-lg transition-all duration-200 mb-20">
       <Apple className="w-4 h-4" fill="white" stroke="none" />
        Download for iOS
      </a>
      <PhoneMockup currentIdx={currentIdx} />
    </section>
  );
}
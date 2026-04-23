"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import {ChevronDown,ArrowRight,Menu,X,ScanLine,WheatOff,MilkOff,ListChecks,CookingPot,Soup,Candy,IceCream,Baby} from "lucide-react";


const SOLUTIONS_ITEMS = [
  {
    icon: <ScanLine size={20} />,
    title: "Allergy Scanning",
    desc: "Scan groceries and even bottled water to reveal hidden ingredients",
  },
  {
    icon: <WheatOff size={20} />,
    title: "Gluten Free Scanning",
    desc: "Wheat, barley, rye, or their derivatives, the scanner flags any gluten-containing ingredients",
  },
  {
    icon: <MilkOff size={20} />,
    title: "Dairy and Lactose Scanning",
    desc: "Detect common dairy-derived ingredients like casein, whey, lactose, and more",
  },
  {
    icon: <ListChecks size={20} />,
    title: "Ingredient Checking",
    desc: "Decode complex ingredient labels in seconds, with easy-to-understand alerts.",
  },
];

const BLOG_ITEMS = [
  {
    img: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=120&h=90&fit=crop",
    title: "We Bought Eggs From Every Store... What We Discovered About 'Pasture-Free,' 'Free-Range,' and 'Cage-Free' Will SHOCK You!",
    desc: "Not all eggs are created equal. We decoded the confusing labels on egg...",
  },
  {
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=120&h=90&fit=crop",
    title: "5 Healthy Kitchen Swaps to Eliminate Microplastics, Forever Chemicals, and Toxins",
    desc: "Your kitchen could be quietly exposing you to harmful microplastics, f...",
  },
];

const FOOD_ITEMS = [
  { icon: <Soup size={20} />, label: "Breakfast Cereals" },
  { icon: <CookingPot size={20} />, label: "Sauces And Condiments" },
  { icon: <CookingPot size={20} />, label: "Snacks Salty" },
  { icon: <Candy size={20} />, label: "Snacks Sweet" },
  { icon: <IceCream size={20} />, label: "Ice Cream And Frozen Dairy" },
  { icon: <Baby size={20} />, label: "Baby And Infant Food" },
];

const BLOG_FEATURED = {
  img: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop",
  title: "We Bought Eggs From Every Store... What We Discovered About 'Pasture-Free,' 'Free-Range,' and 'Cage-Free' Will SHOCK You!",
};

const NAV_LINKS = [
  { label: "Solutions", hasChevron: true, dropdown: "solutions" },
  { label: "Features", hasChevron: false, dropdown: null },
  { label: "Pricing", hasChevron: false, dropdown: null },
  { label: "Blog", hasChevron: true, dropdown: "blog" },
  { label: "Restaurants", hasChevron: false, dropdown: null },
  { label: "Food", hasChevron: true, dropdown: "food" },
];


function SolutionsDropdown() {
  return (
    <div className="absolute top-full left-44 xl:left-1/2 -translate-x-1/2 mt-2 w-150 xl:w-170 bg-white rounded-2xl shadow-xl border border-border-light p-6 z-50">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-6">
          {SOLUTIONS_ITEMS.map((item) => (
            <a href="#" key={item.title} className="flex gap-3 group">
              <span className="text-2xl mt-0.5 shrink-0">{item.icon}</span>
              <div>
                <p className="font-semibold text-text-nav font-body text-sm group-hover:text-brand-primary transition-colors">{item.title}</p>
                <p className="text-text-muted font-body text-xs mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="relative rounded-xl overflow-hidden h-full min-h-50">
          <img src={BLOG_FEATURED.img} alt="Featured" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <p className="text-white font-body font-bold text-xs leading-snug">{BLOG_FEATURED.title}</p>
            <div className="mt-2 flex items-center justify-end">
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <ArrowRight size={12} className="text-text-nav" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogDropdown() {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-155 bg-white rounded-2xl shadow-xl border border-border-light p-6 z-50">
      <div className="grid grid-cols-2 gap-6">
        {BLOG_ITEMS.map((item) => (
          <a href="#" key={item.title} className="flex gap-3 group">
            <img src={item.img} alt={item.title} className="w-24 h-20 rounded-xl object-cover shrink-0" />
            <div>
              <p className="font-bold text-text-nav font-body text-sm leading-snug group-hover:text-brand-primary transition-colors">{item.title}</p>
              <p className="text-text-muted font-body text-xs mt-1 leading-relaxed">{item.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function FoodDropdown() {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-105 bg-white rounded-2xl shadow-xl border border-border-light p-6 z-50">
      <div className="grid grid-cols-2 gap-4">
        {FOOD_ITEMS.map((item) => (
          <a href="#" key={item.label} className="flex items-center gap-3 group hover:bg-bg-container rounded-xl px-3 py-2 transition-colors">
            <span className="text-2xl">{item.icon}</span>
            <span className="text-text-nav font-body text-sm font-medium group-hover:text-brand-primary transition-colors">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

// (>=768px): solutions 2-col, blog 2-col grid, Food 2-col grid visible
// <768px: solutions 1-col stacked, blog/food grids hidden
function MobileDrawerContent() {
  return (
    <div className="flex flex-col px-6 py-6 mx-2 my-2 bg-bg-page">
      <a href="#" className="text-text-muted font-body text-base font-medium hover:opacity-60 mb-5">
        Solutions
      </a>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-6">
        {SOLUTIONS_ITEMS.map((item) => (
          <a href="#" key={item.title} className="flex gap-3 group">
            <span className="text-2xl mt-0.5 shrink-0">{item.icon}</span>
            <div>
              <p className="font-semibold text-text-nav font-body text-sm group-hover:text-brand-primary transition-colors">{item.title}</p>
              <p className="text-text-muted font-body text-xs mt-1 leading-relaxed">{item.desc}</p>
            </div>
          </a>
        ))}
      </div>

      <a href="#" className="text-text-muted font-body text-base font-medium hover:opacity-60 mb-5">Features</a>
      <a href="#" className="text-text-muted font-body text-base font-medium hover:opacity-60 mb-5">Pricing</a>

      {/* blog - label always shown; grid only on sm+ */}
      <a href="#" className="text-text-muted font-body text-base font-medium hover:opacity-60 mb-5">Blog</a>
      <div className="hidden sm:grid grid-cols-2 gap-6 mb-6">
        {BLOG_ITEMS.map((item) => (
          <a href="#" key={item.title} className="flex gap-3 group">
            <img src={item.img} alt={item.title} className="w-22.5 h-17.5 rounded-xl object-cover shrink-0" />
            <div>
              <p className="font-bold text-text-nav font-body text-sm leading-snug group-hover:text-brand-primary transition-colors">{item.title}</p>
              <p className="text-text-muted font-body text-xs mt-1 leading-relaxed">{item.desc}</p>
            </div>
          </a>
        ))}
      </div>

      <a href="#" className="text-text-muted font-body text-base font-medium hover:opacity-60 mb-5">Restaurants</a>

      {/* food - label always shown; grid only on sm+ */}
      <a href="#" className="text-text-muted font-body text-base font-medium hover:opacity-60 mb-5">Food</a>
      <div className="hidden sm:grid grid-cols-2 gap-3 mb-6">
        {FOOD_ITEMS.map((item) => (
          <a href="#" key={item.label} className="flex items-center gap-3 group hover:bg-white rounded-xl px-3 py-2 transition-colors">
            <span className="text-2xl">{item.icon}</span>
            <span className="text-text-nav font-body text-sm font-medium group-hover:text-brand-primary transition-colors">{item.label}</span>
          </a>
        ))}
      </div>

      <a href="#" className="text-text-nav font-body font-medium hover:opacity-60 mb-5">Sign in</a>

      <a href="#" className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-text-headline text-btn-primary-text font-body rounded-btn text-[15px] font-semibold hover:opacity-90 transition-opacity">
        Get Olive <ArrowRight size={15} strokeWidth={2.5} />
      </a>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (dropdown) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 100);
  };

  return (
    <header className="w-full relative z-50">
      <div className="max-w-7xl mx-auto px-4 h-18 flex items-center justify-between">

        <a href="#" className="flex items-center shrink-0 mt-5">
          <Image src="/olivelogo.svg" alt="Olive Logo" width={48} height={44} priority />
          <span className="text-brand-primary font-display font-bold text-[2rem] -ml-0.5 leading-none">Live</span>
        </a>

        {/* desktop nav - lg+ only */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map(({ label, hasChevron, dropdown }) => (
            <div
              key={label}
              className="relative"
              onMouseEnter={() => dropdown && handleMouseEnter(dropdown)}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="flex items-center gap-1 text-text-nav font-body text-[14px] font-medium hover:opacity-60 transition-opacity py-6">
                {label}
                {hasChevron && (
                  <ChevronDown
                    size={14}
                    strokeWidth={2.5}
                    className={`transition-transform duration-200 ${activeDropdown === dropdown ? "rotate-180" : ""}`}
                  />
                )}
              </a>

              {dropdown && activeDropdown === dropdown && (
                <div onMouseEnter={() => handleMouseEnter(dropdown)} onMouseLeave={handleMouseLeave}>
                  {dropdown === "solutions" && <SolutionsDropdown />}
                  {dropdown === "blog" && <BlogDropdown />}
                  {dropdown === "food" && <FoodDropdown />}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a href="#" className="text-text-nav font-body text-[15px] font-medium hover:opacity-60 transition-opacity">Sign in</a>
          <a href="#" className="flex items-center gap-2 px-5 py-2.5 bg-text-headline text-btn-primary-text font-body rounded-btn text-[15px] font-semibold hover:opacity-90 transition-opacity">
            Get Olive
            <ArrowRight size={15} strokeWidth={2.5} />
          </a>
        </div>

        {/* hamburger - below lg */}
        <button
          className="lg:hidden p-1 text-text-nav"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>
      </div>

      {/* mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-bg-container overflow-y-auto max-h-[calc(100vh-72px)]">
          <MobileDrawerContent />
        </div>
      )}
    </header>
  );
}
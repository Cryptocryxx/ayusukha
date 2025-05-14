'use client'
import React from "react";
import { ChevronDown } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "rose" | "teal";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  className = "",
  children,
  ...props
}) => {
  const base =
    "px-6 py-2 text-sm font-medium rounded shadow-md transition-colors duration-200";
  const variants = {
    default: "bg-gray-700 text-white hover:bg-gray-800",
    rose: "bg-rose-300 text-white hover:bg-rose-400",
    teal: "bg-teal-500 text-white hover:bg-teal-600",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Dropdown: React.FC<{ title: string; items: string[] }> = ({ title, items }) => {
  return (
    <li className="relative group cursor-pointer">
      <div className="flex items-center gap-1">
        {title} <ChevronDown className="w-4 h-4" />
      </div>
      <ul className="absolute opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100 origin-top transition-all duration-300 ease-out mt-2 w-44 rounded shadow-lg z-50 bg-teal-700 text-white">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="px-4 py-2 hover:bg-teal-600 transition-colors cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Navigation */}
      <nav className="bg-teal-700 text-white px-6 py-3 flex justify-around items-center w-full fixed top-0 z-50">
        <ul className="flex gap-20 text-sm relative">
          <li>Home</li>
          <Dropdown title="Yoga" items={["Vinyasa", "Hatha", "Yin Yoga"]} />
          <Dropdown title="Ayurveda" items={["Massagen", "Ernährungsberatung"]} />
          <Dropdown title="Über das Studio 108" items={["Philosophie", "Team"]} />
          <li>Über mich</li>
          <li>Kontakt</li>
          <li>Blog</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 bg-cover bg-center h-screen" style={{ backgroundImage: `url('/hero-bg.jpg')` }}>
        <div className="flex flex-col justify-center items-center h-full text-center bg-black bg-opacity-50">
          <p className="tracking-widest text-sm mb-4">BEWEGUNG UND HEILUNG IN BERLIN PANKOW</p>
          <h1 className="text-6xl font-light">
            <span className="relative inline-block">
              <span className="absolute w-full h-2 bg-teal-500 -bottom-1 left-0"></span>
              Studio
            </span>{" "}
            108
          </h1>
          <p className="mt-4 text-xl">Yoga und Ayurveda</p>

          <div className="mt-8 space-y-4">
            <Button variant="rose">
              AKTUELLE KURSE
            </Button>
            <Button variant="teal">
              DETOX MIT AYURVEDA JETZT ANMELDEN
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

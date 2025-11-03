import React, { useState } from "react";
import { Bell, User, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "INÍCIO" },
    { href: "/destaques", label: "DESTAQUES" },
    { href: "/noticias", label: "NOTÍCIAS" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-[#4c2165] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div className="flex flex-col leading-tight">
              <h1 className="text-lg font-bold text-[#4c2165]">Conecta ZL</h1>
              <p className="text-xs text-gray-600">Notícias que nos unem.</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-bold transition-colors ${
                  location === link.href
                    ? "text-[#4c2165]"
                    : "text-gray-600 hover:text-[#6d2d8f]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
              <Bell className="w-6 h-6 text-[#4c2165]" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
              <div className="w-8 h-8 bg-[#4c2165] rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </button>
            
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#4c2165]" />
              ) : (
                <Menu className="w-6 h-6 text-[#4c2165]" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 animate-in slide-in-from-top">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-bold py-2 px-4 rounded-lg transition-colors ${
                    location === link.href
                      ? "bg-[#4c2165] text-white"
                      : "text-[#4c2165] hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 py-2 px-4 border-t border-gray-200 mt-2 pt-4">
                <button className="flex items-center gap-2 text-[#4c2165] hover:text-[#6d2d8f]">
                  <Bell className="w-5 h-5" />
                  <span className="text-sm font-semibold">Notificações</span>
                </button>
                <button className="flex items-center gap-2 text-[#4c2165] hover:text-[#6d2d8f]">
                  <User className="w-5 h-5" />
                  <span className="text-sm font-semibold">Perfil</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

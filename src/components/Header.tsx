import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative bg-linear-to-r from-slate-900 via-emerald-950 to-slate-900 text-white overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-600/30 group-hover:scale-105 transition-transform">
            <span className="text-xl font-bold text-white">HC</span>
          </div>

          <div className="leading-tight hidden sm:block">
            <h1 className="text-lg font-semibold tracking-wide">HireCore</h1>
            <p className="text-xs text-white/70">Recruitment Board</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="text-white/80 hover:text-white transition">
            Home
          </Link>
          <Link
            to="/jobs"
            className="text-white/80 hover:text-white transition"
          >
            Jobs
          </Link>
          <Link
            to="/admin"
            className="text-white/80 hover:text-white transition"
          >
            Admin
          </Link>
        </nav>

        {/* Mobile hamburger Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
          aria-label="open menu"
        >
          <Menu className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* mobile slide in menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-slate-900 z-50
      transform transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
      >
        {/* header */}
        <div
          className="flex items-center justify-between px-5 py-4
        border-b border-white/10"
        >
          <span className="font-semibold text-lg">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-white/10 transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        {/* links */}
        <nav className="flex flex-col gap-2 px-5 py-6 text-sm">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded-lg hover:bg-white/10"
          >
            Home
          </Link>
          <Link
            to="/jobs"
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded-lg hover:bg-white/10"
          >
            Jobs
          </Link>
          <Link
            to="/admin"
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded-lg bg-white/10"
          >
            Admin
          </Link>
        </nav>
      </aside>
    </header>
  );
}

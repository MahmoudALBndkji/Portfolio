"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[rgba(40,58,90,0.9)] py-8 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4 text-center">
        <div className="text-darkness-blue font-bold text-lg mb-2">
          &copy; Copyright <strong><span>Mahmoud AL-Bndkji</span></strong>
        </div>
        <div className="text-sm text-white">
          Developed with <span className="text-middle-blue">&#10084;</span>
        </div>
      </div>
    </footer>
  );
}

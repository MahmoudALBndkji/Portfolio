export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-darkness-blue py-6 md:py-10 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]"
    >
      <div className="container mx-auto md:px-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0">
          <div className="text-light-blue font-bold text-lg text-center md:text-left">
            &copy; Copyright <span className="text-white">Mahmoud AL-Bndkji</span>
          </div>

          <div className="text-lg text-white flex items-center justify-center md:justify-end gap-2 font-bold">
            Developed with
            <span className="text-middle-blue text-3xl leading-none">
              &#10084;
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

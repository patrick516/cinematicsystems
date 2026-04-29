import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f1a] text-white">
      {/* TOP CTA SECTION */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          {/* LEFT CTA */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-lg font-semibold uppercase tracking-wide">
              READY TO <span className="text-blue-400">GET STARTED?</span>
            </h2>

            <p className="text-gray-400 text-sm mt-1 max-w-xs lg:max-w-none">
              Contact us today for professional advice and a free quote.
            </p>

            <button className="mt-3 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 text-sm rounded-md font-medium w-fit">
              CONTACT US
            </button>
          </div>

          {/* CONTACT DETAILS */}
          <div className="flex flex-col gap-2 text-sm text-gray-300 items-center lg:items-start">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>060 424 3676</span>
            </div>

            <div className="flex items-center gap-2">
              <span>✉️</span>
              <span>info@cinematicsystems.co.za</span>
            </div>

            <div className="flex items-center gap-2 text-center lg:text-left">
              <span>📍</span>
              <span>
                Service Areas
                <br />
                We serve all areas
              </span>
            </div>
          </div>

          {/* LOGO + TEXT - COMBINED AS ONE UNIT */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-16 h-16">
              <Image
                src="/images/logo.jpeg"
                alt="Cinematic Systems"
                fill
                priority
                className="object-contain rounded-full"
              />
            </div>

            <div className="mt-2">
              <h1 className="text-xl font-bold">
                CINEMATIC <span className="text-blue-400">SYSTEMS</span>
              </h1>

              <p className="text-xs text-gray-400 mt-1 max-w-xs">
                Neat, Reliable, Reasonable & Professional
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#070a12] py-3">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 text-center md:text-left">
          <p>© 2024 Cinematic Systems. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">
            Neat, Reliable, Reasonable & Professional
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

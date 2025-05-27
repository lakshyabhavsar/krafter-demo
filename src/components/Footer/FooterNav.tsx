import Link from 'next/link';
import { Home, Mail, MapPinHouse, PhoneCall, User} from 'lucide-react';

const FooterNav = () => {
  return (
    <nav className="flex justify-center w-full mt-auto">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-[#bab8ba]/30 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full">
        <Link href="/" className="group">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 group-hover:w-14 group-hover:h-14 sm:group-hover:w-18 sm:group-hover:h-18 md:group-hover:w-22 md:group-hover:h-22 group-hover:-translate-y-6 sm:group-hover:-translate-y-8 md:group-hover:-translate-y-10 group-hover:bg-[#a3a2a3] group-hover:shadow-lg">
            <Home className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-gray-600 group-hover:w-6 group-hover:h-6 sm:group-hover:w-8 sm:group-hover:h-8 md:group-hover:w-10 md:group-hover:h-10 group-hover:text-[#8d65a8] transition-all duration-300" />
          </div>
        </Link>
        <Link href="/" className="group">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 group-hover:w-14 group-hover:h-14 sm:group-hover:w-18 sm:group-hover:h-18 md:group-hover:w-22 md:group-hover:h-22 group-hover:-translate-y-6 sm:group-hover:-translate-y-8 md:group-hover:-translate-y-10 group-hover:bg-[#a3a2a3] group-hover:shadow-lg">
            <User className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-gray-600 group-hover:w-6 group-hover:h-6 sm:group-hover:w-8 sm:group-hover:h-8 md:group-hover:w-10 md:group-hover:h-10 group-hover:text-[#8d65a8] transition-all duration-300" />
          </div>
        </Link>
        <Link href="/" className="group">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 group-hover:w-14 group-hover:h-14 sm:group-hover:w-18 sm:group-hover:h-18 md:group-hover:w-22 md:group-hover:h-22 group-hover:-translate-y-6 sm:group-hover:-translate-y-8 md:group-hover:-translate-y-10 group-hover:bg-[#a3a2a3] group-hover:shadow-lg">
            <MapPinHouse className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-gray-600 group-hover:w-6 group-hover:h-6 sm:group-hover:w-8 sm:group-hover:h-8 md:group-hover:w-10 md:group-hover:h-10 group-hover:text-[#8d65a8] transition-all duration-300" />
          </div>
        </Link>
        <Link href="/" className="group">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 group-hover:w-14 group-hover:h-14 sm:group-hover:w-18 sm:group-hover:h-18 md:group-hover:w-22 md:group-hover:h-22 group-hover:-translate-y-6 sm:group-hover:-translate-y-8 md:group-hover:-translate-y-10 group-hover:bg-[#a3a2a3] group-hover:shadow-lg">
            <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-gray-600 group-hover:w-6 group-hover:h-6 sm:group-hover:w-8 sm:group-hover:h-8 md:group-hover:w-10 md:group-hover:h-10 group-hover:text-[#8d65a8] transition-all duration-300" />
          </div>
        </Link>
        <Link href="/" className="group">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 group-hover:w-14 group-hover:h-14 sm:group-hover:w-18 sm:group-hover:h-18 md:group-hover:w-22 md:group-hover:h-22 group-hover:-translate-y-6 sm:group-hover:-translate-y-8 md:group-hover:-translate-y-10 group-hover:bg-[#a3a2a3] group-hover:shadow-lg">
            <User className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-gray-600 group-hover:w-6 group-hover:h-6 sm:group-hover:w-8 sm:group-hover:h-8 md:group-hover:w-10 md:group-hover:h-10 group-hover:text-[#8d65a8] transition-all duration-300" />
          </div>
        </Link>
        <Link href="/" className="group">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 group-hover:w-14 group-hover:h-14 sm:group-hover:w-18 sm:group-hover:h-18 md:group-hover:w-22 md:group-hover:h-22 group-hover:-translate-y-6 sm:group-hover:-translate-y-8 md:group-hover:-translate-y-10 group-hover:bg-[#a3a2a3] group-hover:shadow-lg">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-gray-600 group-hover:w-6 group-hover:h-6 sm:group-hover:w-8 sm:group-hover:h-8 md:group-hover:w-10 md:group-hover:h-10 group-hover:text-[#8d65a8] transition-all duration-300" />
          </div>
        </Link>
        {/* Apply the same responsive classes to other Links */}
      </div>
    </nav>
  );
};

export default FooterNav;
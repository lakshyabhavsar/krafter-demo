
const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-white/50 backdrop-blur-sm border-t border-white/30">
      <div className="container mx-auto text-center">
        <h3 className="text-[28px] font-semibold text-gray-900 mb-4">
          Ready to Build Your Mobile App?
        </h3>
        <p className="text-[18px] text-gray-700 mb-8 max-w-2xl mx-auto">
          Transform your ideas into powerful mobile applications that engage users and drive business growth
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
          Start Your Project
        </button>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            © 2024 Mobile App Development Hub. Empowering digital innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
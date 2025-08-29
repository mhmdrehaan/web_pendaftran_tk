import { Sparkles, X, Menu, MapPin } from "lucide-react";

const Header = ({
  currentSection,
  setCurrentSection,
  isMenuOpen,
  setIsMenuOpen,
  navigationItems = [], // ✅ default array kosong
}) => {
  return (
    <div className="min-h-full bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      {/* Enhanced Navigation */}
      <nav className="bg-white/95 backdrop-blur-xl shadow-xl sticky top-0 z-50 border-b border-emerald-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo + Title */}
            <div className="flex items-center space-x-4">
              {/* Icon */}
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 via-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="/assets/img/icon.png"
                    alt="Logo"
                    className="w-7 h-7 transform -rotate-12"
                  />
                </div>
              </div>

              {/* Text */}
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  TKIT Ar-Rahman
                </h1>
                <p className="text-sm text-gray-600 flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  Perum Graha Prima, Singasari, Kec. Jonggol, Kabupaten Bogor, Jawa Barat 16830
                </p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navigationItems?.slice(0, -1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentSection(item.id)}
                  className={`px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                    currentSection === item.id
                      ? "bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg transform scale-105"
                      : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => setCurrentSection("registration")}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Daftar Sekarang
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-white/95 backdrop-blur-xl rounded-2xl mt-2 p-4 shadow-2xl">
            {navigationItems?.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 rounded-xl transition-all flex items-center gap-3 ${
                  currentSection === item.id
                    ? "bg-gradient-to-r from-emerald-500 to-blue-500 text-white"
                    : "text-gray-700 hover:bg-emerald-50"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;

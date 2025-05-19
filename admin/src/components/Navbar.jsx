import logo from '../assets/logo-only.png';

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <img src={logo} alt="" className="w-10"/>
          <h1>Trendy Step BD</h1>
        </div>
       
        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          <button className="border rounded-full text-sm px-4 py-1">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

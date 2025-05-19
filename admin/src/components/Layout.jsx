import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-100">
        <main className="p-6">{children} </main>
      </div>
    </div>
  );
};

export default Layout;

import UserSidebar from "./UserSidebar";
import UserNavbar from "./UserNavbar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-200">
      <UserSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <UserNavbar />
        <main className="flex-1 overflow-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

import Footer from "@/components/modules/layout/footer/Footer";
import Navbar from "@/components/modules/layout/navbar/Navbar";

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div
        className={`max-w-7xl mx-auto min-h-screen space-y-16 xl:space-y-20 px-6 mt-20 `}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default UserLayout;

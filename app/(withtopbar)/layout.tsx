import Topbar from "@/components/layouts/Topbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Topbar />
      {children}
    </>
  );
};

export default HomeLayout;

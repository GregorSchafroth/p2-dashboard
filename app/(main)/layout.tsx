import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
          <div className='flex-grow flex'>
            <aside className='hidden md:block h-auto w-[350px]'>
              <Sidebar />
            </aside>
            <div className='flex-grow p-5'>{children}</div>
          </div>
        <Footer />
    </>
  );
};

export default MainLayout;

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'P2 Dashboard',
  description: 'Admin Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} flex flex-col min-h-screen`} >
        <Navbar />
        <div className='flex-grow flex'>
          <aside className='hidden md:block h-auto w-[350px]'>
            <Sidebar />
          </aside>
          <div className='flex-grow p-5'>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}

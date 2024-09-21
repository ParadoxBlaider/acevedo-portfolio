import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className="flex-grow pt-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
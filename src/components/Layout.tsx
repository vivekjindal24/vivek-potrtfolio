import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;

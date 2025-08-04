import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-grow container mx-auto px-20">
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
}

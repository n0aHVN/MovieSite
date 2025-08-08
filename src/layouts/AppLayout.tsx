import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-black-main text-white">
      <Header />
      <main className="flex-auto w-full h-full">
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
}

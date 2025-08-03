import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
}

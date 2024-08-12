import DashboardCard from '@/components/dashboard/DashboardCard';
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-5'>
        <DashboardCard
          title='Posts'
          count={100}
          icon={<Newspaper className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Categories'
          count={1000}
          icon={<Folder className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Users'
          count={750}
          icon={<User className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Comments'
          count={42}
          icon={<MessageCircle className='text-slate-500' size={72} />}
        />
      </div>
    </>
  );
}

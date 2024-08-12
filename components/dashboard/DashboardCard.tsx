import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

// Utility function to abbreviate numbers
const abbreviateNumber = (num: number) => {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(1) + 'B'; // Billion
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + 'M'; // Million
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + 'K'; // Thousand
  } else {
    return num.toString(); // Less than thousand
  }
};

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
  return (
    <Card className='bg-slate-100 dark:bg-slate-800 p-4 pb-0'>
      <CardHeader>
        <CardTitle className='text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200'>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className='flex gap-5 justify-center items-center'>
        <div className='flex-shrink-0'>{icon}</div>
        <p className='text-4xl font-semibold text-slate-500 dark:text-slate-200'>
          {abbreviateNumber(count)}
        </p>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;

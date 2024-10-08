import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import {
  LayoutDashboard,
  Newspaper,
  Folders,
  CreditCard,
  Settings,
  User,
  Layout,
} from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <Command className='bg-secondary rounded-none'>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem>
            <LayoutDashboard className='mr-2 h-4 w-4'></LayoutDashboard>
            <Link href='/'>Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className='mr-2 h-4 w-4'></Newspaper>
            <Link href='/posts'>Posts</Link>
          </CommandItem>
          <CommandItem className='opacity-50 cursor-not-allowed'>
            <Folders className='mr-2 h-4 w-4 '></Folders>
            <div>Categories</div>
          </CommandItem>
          
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading='Settings'>
          <CommandItem className='opacity-50 cursor-not-allowed'>
            <User className='mr-2 h-4 w-4' />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem className='opacity-50 cursor-not-allowed'>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut >⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem className='opacity-50 cursor-not-allowed'>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Sidebar;

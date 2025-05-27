import {
    Activity,
    Component,
    HomeIcon,
    Mail,
    Package,
    ScrollText,
    
  } from 'lucide-react';
  
  import { Dock, DockIcon, DockItem, DockLabel } from './dock';
  
  const data = [
    {
      title: 'Home',
      icon: (
        <HomeIcon className='h-full w-full text-blue-600 hover:text-blue-700 dark:text-blue-500' />
      ),
      href: '#',
    },
    {
      title: 'Products',
      icon: (
        <Package className='h-full w-full text-blue-600 hover:text-blue-700 dark:text-blue-500' />
      ),
      href: '#',
    },
    {
      title: 'Components',
      icon: (
        <Component className='h-full w-full text-blue-600 hover:text-blue-700 dark:text-blue-500' />
      ),
      href: '#',
    },
    {
      title: 'Activity',
      icon: (
        <Activity className='h-full w-full text-blue-600 hover:text-blue-700 dark:text-blue-500' />
      ),
      href: '#',
    },
    {
      title: 'Change Log',
      icon: (
        <ScrollText className='h-full w-full text-blue-600 hover:text-blue-700 dark:text-blue-500' />
      ),
      href: '#',
    },
    {
      title: 'Email',
      icon: (
        <Mail className='h-full w-full text-blue-600 hover:text-blue-700 dark:text-blue-500' />
      ),
      href: '#',
    },
    
  ];
  
  export function AppleStyleDock() {
    return (
      <div className='relative bottom-0 left-1/2 max-w-full -translate-x-1/2 bg-transparent'>
        <Dock className='items-end pb-3'>
          {data.map((item, idx) => (
            <DockItem
              key={idx}
              className='aspect-square rounded-full bg-gray-200/80 backdrop-blur-sm dark:bg-neutral-800/80'
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          ))}
        </Dock>
      </div>
    );
  }
  
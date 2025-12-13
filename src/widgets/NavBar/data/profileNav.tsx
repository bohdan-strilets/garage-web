import { FaUserLarge } from 'react-icons/fa6';
import { RiSettings5Fill } from 'react-icons/ri';

import type { NavItem } from '../types/NavItem';

export const profileNav: NavItem[] = [
  {
    id: '1',
    icon: <RiSettings5Fill />,
    label: 'Settings',
    to: '/settings',
  },
  {
    id: '2',
    icon: <FaUserLarge />,
    label: 'Profile',
    to: '/profile',
  },
];

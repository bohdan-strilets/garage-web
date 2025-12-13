import { BsStars } from 'react-icons/bs';
import { GoHomeFill } from 'react-icons/go';
import { IoMdImages } from 'react-icons/io';
import { IoCarSportSharp } from 'react-icons/io5';
import { MdBuild, MdEnergySavingsLeaf } from 'react-icons/md';
import { RiBarChart2Fill } from 'react-icons/ri';

import type { NavItem } from '../types/NavItem';

export const mainNav: NavItem[] = [
  {
    id: '1',
    icon: <GoHomeFill />,
    label: 'Home',
    to: '/home',
  },
  {
    id: '2',
    icon: <IoCarSportSharp />,
    label: 'Cars',
    to: '/cars',
  },
  {
    id: '3',
    icon: <MdBuild />,
    label: 'Services',
    to: '/services',
  },
  {
    id: '4',
    icon: <BsStars />,
    label: 'Car care',
    to: '/car-care',
  },
  {
    id: '5',
    icon: <IoMdImages />,
    label: 'Gallery',
    to: '/gallery',
  },
  {
    id: '6',
    icon: <MdEnergySavingsLeaf />,
    label: 'Energy',
    to: '/energy',
  },
  {
    id: '7',
    icon: <RiBarChart2Fill />,
    label: 'Statistics',
    to: '/statistics',
  },
];

import {
  BriefcaseIcon,
  IdentificationIcon,
  LogoutIcon,
  PencilAltIcon,
  ShieldCheckIcon,
  TemplateIcon,
  UserIcon
} from '@heroicons/react/outline';

const SidebarMenu = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: TemplateIcon
  },
  {
    name: 'Daftar Lowongan',
    href: '/dashboard/jobs',
    icon: BriefcaseIcon
  },
  {
    name: 'Data Form',
    href: '/dashboard/form',
    icon: PencilAltIcon
  },
  {
    name: 'Akun',
    href: '/dashboard/account',
    icon: UserIcon,
    children: [
      {
        name: 'Detail',
        href: '/dashboard/account/detail',
        icon: IdentificationIcon
      },
      {
        name: 'Keamanan',
        href: '/dashboard/account/security',
        icon: ShieldCheckIcon
      },
      {
        name: 'Logout',
        href: '/logout',
        icon: LogoutIcon
      }
    ]
  }
];

const NavMenu = [
  {
    name: 'Jobs',
    href: '#jobs'
  },
  {
    name: 'Companies',
    href: '#companies'
  },
  {
    name: 'About',
    href: '#about'
  }
];

export { SidebarMenu, NavMenu };

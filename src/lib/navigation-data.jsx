import {
  BriefcaseIcon,
  IdentificationIcon,
  LogoutIcon,
  PencilAltIcon,
  ShieldCheckIcon,
  TemplateIcon,
  UserIcon
} from '@heroicons/react/outline';

export const SidebarMenu = [
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
    icon: UserIcon,
    children: [
      {
        name: 'Detail',
        href: '/dashboard/account',
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

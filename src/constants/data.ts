import {
  CalendarEventIcon,
  DashboardIcon,
  HomeIcon,
  LogOutIcon,
  SettingIcon,
  UserDetailIcon,
} from '@/components/Icons'

export const navItems = [
  {
    name: 'INICIO',
    href: '/dashboard',
    icon: DashboardIcon,
  },
  {
    name: 'RESERVAS',
    href: '/dashboard/reservations',
    icon: CalendarEventIcon,
  },
  {
    name: 'CABAÑAS',
    href: '/dashboard/cabins',
    icon: HomeIcon,
  },
  {
    name: 'CLIENTES',
    href: '/dashboard/customers',
    icon: UserDetailIcon,
  },
  {
    name: 'CONFIGURACIONES',
    href: '/dashboard/settings',
    icon: SettingIcon,
  },
  {
    name: 'CERRAR SESIÓN',
    href: '#',
    icon: LogOutIcon,
  },
]

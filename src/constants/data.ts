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

export const cabinHeading = {
  id: '#',
  name: 'Nombre',
  description: 'Descripción',
  price: 'Precio',
}

export const customerHeading = {
  id: '#',
  name: 'Nombre',
  last_name: 'Apellido',
  email: 'Correo',
  phone: 'Teléfono',
}

export const reservationHeading = {
  id: '#',
  customer: 'Cliente',
  cabin: 'Cabaña',
  startDate: 'Fecha de inicio',
  endDate: 'Fecha de fin',
  tinaja: 'Tinaja',
  amount: 'Monto',
  discount: 'Descuento',
  message: 'Mensaje',
}

export const settingHeading = {
  id: '#',
  key: 'Llave',
  value: 'Valor',
}

export const tinajaHeading = {
  id: '#',
  name: 'Nombre',
  description: 'Descripción',
  price: 'Precio',
}

export const prepaidHeading = {
  id: '#',
  name: 'Nombre',
  description: 'Descripción',
  price: 'Precio',
}

export const userHeading = {
  id: '#',
  name: 'Nombre',
  email: 'Correo',
  last_name: 'Apellido',
  phone: 'Teléfono',
  role: 'Rol',
}

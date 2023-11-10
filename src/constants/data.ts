import {
  CalendarEventIcon,
  DashboardIcon,
  HomeIcon,
  LogOutIcon,
  SettingIcon,
  UserDetailIcon,
} from '@/components/icons'

export const navItems = [
  {
    name: 'inicio',
    href: '/dashboard',
    icon: DashboardIcon,
  },
  {
    name: 'reservas',
    href: '/dashboard/reservations',
    icon: CalendarEventIcon,
  },
  {
    name: 'cabañas',
    href: '/dashboard/cabins',
    icon: HomeIcon,
  },
  {
    name: 'clientes',
    href: '/dashboard/customers',
    icon: UserDetailIcon,
  },
  {
    name: 'configuraciones',
    href: '/dashboard/settings',
    icon: SettingIcon,
  },
  {
    name: 'cerrar sesión',
    href: '#',
    icon: LogOutIcon,
  },
]

export const cabinHeading = {
  id: '#',
  color: 'Color',
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

export const modalModes = {
  create: 'create',
  edit: 'edit',
  delete: 'delete',
}

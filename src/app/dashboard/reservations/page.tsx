'use client'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import exampleEvents from '@/mocks/events.json'
import { useGetReservationsQuery } from '@/redux/services/reservationApi'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
function ReservationPage() {
  const { data: reservations, isLoading } = useGetReservationsQuery(1)
  console.log(reservations?.results)

  const localizer = momentLocalizer(moment)

  return (
    <section>
      <Calendar
        style={{ height: 690 }}
        className=''
        localizer={localizer}
        events={exampleEvents}
        startAccessor='start'
        endAccessor='end'
        messages={{
          allDay: 'Todo el día',
          date: 'Fecha',
          day: 'Día',
          event: 'Evento',
          month: 'Mes',
          next: 'Siguiente',
          noEventsInRange: 'No hay eventos en este rango',
          previous: 'Anterior',
          showMore: (total) => `+ Ver más (${total})`,
          time: 'Hora',
          today: 'Hoy',
          week: 'Semana',
          work_week: 'Semana laboral',
          tomorrow: 'Mañana',
          yesterday: 'Ayer',
        }}
      />
    </section>
  )
}
export default ReservationPage

{
  /* <section className='flex flex-col'>
<div className='my-12 flex items-center justify-between'>
  <h2 className='text-lg font-bold'>ENERO - 2023</h2>
  <div className='flex items-center gap-16'>
    <div className='flex items-center gap-3'>
      <label htmlFor='month'>Mes:</label>
      <select
        name='month'
        id='month'
        className='rounded-md p-2.5 dark:bg-slate-800'
      >
        <option value='1'>Enero</option>
        <option value='2'>Febrero</option>
        <option value='3'>Marzo</option>
        <option value='4'>Abril</option>
        <option value='5'>Mayo</option>
        <option value='6'>Junio</option>
        <option value='7'>Julio</option>
        <option value='8'>Agosto</option>
        <option value='9'>Septiembre</option>
        <option value='10'>Octubre</option>
        <option value='11'>Noviembre</option>
        <option value='12'>Diciembre</option>
      </select>
    </div>
    <div className='flex items-center gap-3'>
      <label htmlFor='month'>Año:</label>
      <select
        name='year'
        id='year'
        className='rounded-md p-2.5 dark:bg-slate-800'
      >
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
        <option selected value='2023'>
          2023
        </option>
        <option value='2024'>2024</option>
        <option value='2025'>2025</option>
      </select>
    </div>
  </div>
</div>
</section> */
}

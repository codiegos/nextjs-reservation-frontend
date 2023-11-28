import { Calendar as BigCalendar, CalendarProps } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '@/components/calendar/styles.css'
import moment from 'moment'
import 'moment/locale/es' // Importa el idioma español si aún no lo has hecho
import 'moment-timezone'
import { CalendarEvent } from '@/types'

moment.locale('es') // Establece el idioma de moment

export function Calendar({ events, localizer }: CalendarProps) {
  const eventStyleGetter = (event: CalendarEvent) => {
    const color = event.color // Color predeterminado si no se especifica
    const style = {
      backgroundColor: color,
      opacity: 0.8,
      color: 'black',
      fontWeight: 'bold',
    }

    return {
      style,
    }
  }

  return (
    <BigCalendar
      style={{ height: '70vh' }}
      localizer={localizer}
      events={events}
      views={['month', 'agenda']}
      startAccessor='start'
      endAccessor='end'
      messages={{
        allDay: 'Todo el día',
        date: 'Fecha',
        day: 'Día',
        event: 'Evento',
        month: 'Mes',
        next: 'Después',
        noEventsInRange: 'No hay eventos en este rango',
        previous: 'Antes',
        showMore: (total) => `+ Ver más (${total})`,
        time: 'Hora',
        today: 'Hoy',
        week: 'Semana',
        work_week: 'Semana laboral',
        tomorrow: 'Mañana',
        yesterday: 'Ayer',
      }}
      onShowMore={(events, date) => {
        alert(`Mostrar más eventos en ${date}`)
      }}
      eventPropGetter={eventStyleGetter}
      onSelectEvent={(event) => {
        if (event.message) {
          alert(event.message)
        }
      }}
    />
  )
}

import { Component, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-admincalendar',
  templateUrl: './admincalendar.component.html',
  styleUrl: './admincalendar.component.css'
})
export class AdmincalendarComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin,listPlugin,dayGridPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridDay,timeGridWeek,listWeek' 
    },
    initialView: 'timeGridWeek',
    weekends: false,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    slotMinTime: '08:00:00', // Set minimum time to 08:00 AM
    slotMaxTime: '18:00:00', // Set maximum time to 06:00 PM
    
    businessHours: [ // Define business hours to exclude 1pm to 2pm
    {
      daysOfWeek: [1, 2, 3, 4, 5], // Monday to Friday
      startTime: '08:00', // 8am
      endTime: '13:00' // 1pm
    },
    {
      daysOfWeek: [1, 2, 3, 4, 5], // Monday to Friday
      startTime: '14:00', // 2pm
      endTime: '18:00' // 6pm
    }
  ],

  slotLabelContent: (args) => {
    const date = args.date;
    const hour = date.getHours();
    if (hour === 13) { // Hide 1 PM slot
      return '';
    } else {
      return args.text;
    }}
};
 
  }

  

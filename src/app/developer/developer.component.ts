import { Component, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { MatDialog } from '@angular/material/dialog';
import { EventModalComponent } from '../components/event-modal/event-modal.component';
import listPlugin from '@fullcalendar/list';

@Component({
  selector: 'app-root',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    plugins: [interactionPlugin, timeGridPlugin,listPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridDay,timeGridWeek,listWeek' // Removed 'dayGridMonth' option
    },
    initialView: 'timeGridWeek',
    initialEvents: INITIAL_EVENTS,
    weekends: false,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
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
  currentEvents: EventApi[] = [];

  constructor(private changeDetector: ChangeDetectorRef, public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(EventModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    this.openDialog();
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }
}

import { Component, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { MatDialog } from '@angular/material/dialog';
import listPlugin from '@fullcalendar/list';
import { BooleanInput } from '@angular/cdk/coercion';

@Component({
  selector: 'app-root',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent {
sideBarToggler() {
throw new Error('Method not implemented.');
}
sideBarOpen: BooleanInput;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
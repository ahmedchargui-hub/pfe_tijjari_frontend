import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent {
    title = 'org-panel-layout';
    sideBarOpen = true;
  
    sideBarToggler() {
      this.sideBarOpen = !this.sideBarOpen;
    }
  }
import {Component} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrl: './event-modal.component.css',
  
})
export class EventModalComponent {
  name: string = ''; 
  constructor(public dialog: MatDialog) {}
  
  // Define the variable 'nom'

 
 onSubmit(e:any){this.name=e.target.elements[0].value; this.openmodal()}openmodal() {
    throw new Error('Method not implemented.');
  }
;

 }



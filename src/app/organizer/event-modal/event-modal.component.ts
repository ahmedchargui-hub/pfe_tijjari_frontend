import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent {
  nom: string = '';
  statut: string = '';
  dateDebut: string = '';
  dateFin: string = '';

  constructor(public dialog: MatDialog) {}
  
  onSubmit() {
    console.log('Form submitted!');
    console.log('Nom Projet:', this.nom);
    console.log('Statut Projet:', this.statut);
    console.log('Date de début:', this.dateDebut);
    console.log('Date de fin:', this.dateFin);
  }

  openmodal() {
    console.log('Modal opened!');
  }
}

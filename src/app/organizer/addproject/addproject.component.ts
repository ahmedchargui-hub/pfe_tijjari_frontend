import { Component } from '@angular/core';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent {
  code: string = ''; 
  nom: string = '';
  description: string = '';
  unite: string = '';
  date_debut: Date | null = null;
  date_fin: Date | null = null;
  statut: string = '';
  dev_nom: string = '';
  dev_prenom: string = '';
  matricule: string = '';

  onSubmit() {
    console.log('Form submitted!');
    console.log('Code Projet:', this.code);
    console.log('Nom Projet:', this.nom);
    console.log('Description:', this.description);
    console.log('Unité concernée:', this.unite);
    console.log('Date de début:', this.date_debut);
    console.log('Date de fin:', this.date_fin);
    console.log('Statut de projet:', this.statut);
    console.log('Nom de Developer:', this.dev_nom);
    console.log('Prénom de Developer:', this.dev_prenom);
    console.log('Matricule:', this.matricule);
  }
}

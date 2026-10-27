import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-taken',
  styleUrl: './taken.css',
  templateUrl: './taken.html',
})

export class Taken {
  taken: string[] = [];
  niueuweTaak = "";

  taaktoevoegen() {
    this.taken.push(this.niueuweTaak);
    this.niueuweTaak = "";
  }

  taakverwijderen(taak: string) {
    let nieuweTaken: string[] = [];

    for (let tk of this.taken) {
      if (tk !== taak) {
        nieuweTaken.push(tk);
      }
    }
    this.taken = nieuweTaken;
  }
}

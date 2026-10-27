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
  gevinteTaken: string[] = [];

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

  kleurveranderen(taak: string) {
    if (this.gevinteTaken.includes(taak)) {
      let niueweTaken: string[] = [];

      for (let tk of this.gevinteTaken) {
        if (tk !== taak) {
          niueweTaken.push(tk);
        }
      }
      this.gevinteTaken = niueweTaken;
    } else {
      this.gevinteTaken.push(taak);
    }
  }
}

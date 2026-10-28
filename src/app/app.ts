import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Taken } from './taken/taken';
import { Studiestips } from './studiestips/studiestips';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Taken, Studiestips],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('studie-app');
}
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Taken } from './taken/taken';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Taken],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('studie-app');
}

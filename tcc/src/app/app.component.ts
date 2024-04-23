import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { modulosMenu } from './app.routes';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, modulosMenu],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tcc.front';
}

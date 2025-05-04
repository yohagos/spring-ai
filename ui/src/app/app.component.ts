import { Component } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './shared/components/header.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GenAI';


}

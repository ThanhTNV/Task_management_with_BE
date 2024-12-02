import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from "./components/footer/footer.component";
// import { HeaderModule } from '@coreui/angular';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CommonModule, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TasksManagement';
}

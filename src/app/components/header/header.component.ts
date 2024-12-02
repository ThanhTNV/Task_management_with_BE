import { Component } from '@angular/core';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatListModule, MatListItem } from '@angular/material/list';
import { RouterModule } from '@angular/router';
// import {
//   ContainerComponent,
//   DropdownComponent,
//   HeaderModule,
//   NavItemComponent,
//   NavLinkDirective,
// } from '@coreui/angular';

@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatSidenavModule,
    // MatListModule,
    // HeaderModule,
    // ContainerComponent,
    // NavLinkDirective,
    // NavItemComponent,
    // DropdownComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}

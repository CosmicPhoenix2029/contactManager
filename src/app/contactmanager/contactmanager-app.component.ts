import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contactmanager-app',
  template: `
    <app-sidenav></app-sidenav>
  `,
  styleUrls: ['./contactmanager-app.component.scss']
})
export class ContactmanagerAppComponent {

  constructor(iconRegistry: MatIconRegistry, Sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(Sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
  }
}

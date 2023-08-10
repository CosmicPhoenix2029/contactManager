import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private dialog: MatDialog) {}

  openAddContactDialog(): void {
    let dialogRef = this.dialog.open(NewContactDialogComponent, {
      width: '450px'
    }); 
    
    dialogRef.afterClosed().subscribe({
      next: result => console.log('The dialog was closed', result)
    });
  }
}

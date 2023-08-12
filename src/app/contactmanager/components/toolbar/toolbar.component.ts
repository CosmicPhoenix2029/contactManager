import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleTheme = new EventEmitter<void>();

  constructor(
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router) {}

  openAddContactDialog(): void {
    let dialogRef = this.dialog.open(NewContactDialogComponent, {
      width: '450px'
    }); 
    
    dialogRef.afterClosed().subscribe({
      next: result => {
        console.log('The dialog was closed', result)

        if(result) {
          this.openSnackBar('Contact added', "Navigate")
          .onAction().subscribe(() => {
            this.router.navigate(['/contactmanager', result.id]);   
          });
        }
      } 
    });
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this._snackBar.open(message, action);
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit{

  avatars: string[] = [
    'svg-1', 'svg-2', 'svg-3', 'svg-4'
  ]
  
  user!: User;

  constructor(
    private dialogRef: MatDialogRef<NewContactDialogComponent>,
    private userService: UserService) {}

  ngOnInit(): void {
    this.user = new User();
  }

  save() {
    if(this.name.value) {
      this.user.name = this.name.value;
    }
    this,this.userService.addUser(this.user).then((user: User) =>
      this.dialogRef.close(user)
      );    
  }
  
  dismiss() {
    this.dialogRef.close(null);
  }

  name = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a name';
    }

    return this.name.hasError('name') ? 'You must enter a name' : '';
  }
}

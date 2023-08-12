import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

const SMALL_WIDTH_BREAKPOINT: number = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  public isScreenSmall!: boolean;
  isDarkTheme: boolean = false;
  users!: Observable<User[]>;
  
  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    private router: Router
    ) {}

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  ngOnInit(): void {
    this.breakpointObserver
    .observe([ `max-width: ${SMALL_WIDTH_BREAKPOINT}px` ])
    .subscribe((state: BreakpointState) => {
      this.isScreenSmall = state.matches;   
    });

    this.userService.loadAll();
    this.users = this.userService.users;

    this.router.events.subscribe(() => {
      if(this.isScreenSmall) {
        this.sidenav.close(); 
      }
    });
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
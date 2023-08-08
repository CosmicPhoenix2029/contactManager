import { Component } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'

const SMALL_WIDTH_BREAKPOINT: number = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  public isScreenSmall!: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
    .observe([ `max-width: ${SMALL_WIDTH_BREAKPOINT}px` ])
    .subscribe((state: BreakpointState) => {
      this.isScreenSmall = state.matches;   
    });
  }
}

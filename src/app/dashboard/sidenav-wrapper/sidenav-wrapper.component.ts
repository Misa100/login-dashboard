import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
declare var handleSignout: any;

@Component({
  selector: 'app-sidenav-wrapper',
  templateUrl: './sidenav-wrapper.component.html',
  styleUrls: ['./sidenav-wrapper.component.css']
})
export class SidenavWrapperComponent implements OnInit {
  isExpanded: boolean = false;
  currentRouteName = '';
  userProfile: any;
  isMobile: boolean = window.innerWidth < 768;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => {
        let urlSegments = event.urlAfterRedirects.split('/');
        return urlSegments[urlSegments.length - 1];
      })
    ).subscribe(routeName => {
      this.currentRouteName = routeName.charAt(0).toUpperCase() + routeName.slice(1);
    });
  }

  ngOnInit() {
    this.userProfile = JSON.parse(sessionStorage.getItem("loggedInUser") || "");
    this.adjustSidenav();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth < 768;
    this.adjustSidenav();
  }

  adjustSidenav() {
    this.isExpanded = !this.isMobile;
  }

  handleSignOut() {
    handleSignout();
    sessionStorage.removeItem("loggedInUser");
    this.router.navigate(["/login"]).then(() => {
      window.location.reload();
    });
  }
}

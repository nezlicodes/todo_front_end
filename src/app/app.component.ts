import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';import { slideInAnimation } from './animations';
import { RoutingInterceptorService } from './services/routing-interceptor.service';
import { ActivatedRoute, Router, NavigationError, NavigationCancel, NavigationEnd, RouterEvent, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'Task manager';
  public loading:boolean;
  constructor(private router: Router, private navInterceptor: RoutingInterceptorService) {
   
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true
    }
    if (event instanceof NavigationEnd) {
      this.loading = false
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false
    }
    if (event instanceof NavigationError) {
      this.loading = false
    }
}
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  //isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //  .pipe(
  //    map(result => result.matches)
  //  );

  //constructor(private breakpointObserver: BreakpointObserver) { }

}

import { Component, OnInit, NgZone } from '@angular/core';
import { MatchmediaService } from 'ng2-mmbreakpoints';
import { mmCreate } from './mm-create';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: MatchmediaService, useFactory: mmCreate}]
})
export class AppComponent {
  title = 'ng2-mmbreakpoints-library';
  displayBreakpoint: string;
  displayColor: string;

  constructor(private nn2: MatchmediaService, private ngZone: NgZone) {}

  ngOnInit() {
    this.updateMMData();
    this.nn2.matchmediaChanges.subscribe(() => {
      this.ngZone.run(() => {
        this.updateMMData();
      });
    });
  }

  updateMMData() {
    if (this.nn2.matchmediaCollection.xs.matches) {
      this.displayBreakpoint = 'XS';
      this.displayColor = 'blue';
    } else if (this.nn2.matchmediaCollection.sm.matches) {
      this.displayBreakpoint = 'SM';
      this.displayColor = 'green';
    } else if (this.nn2.matchmediaCollection.md.matches) {
      this.displayBreakpoint = 'MD';
      this.displayColor = 'gold';
    } else if (this.nn2.matchmediaCollection.lg.matches) {
      this.displayBreakpoint = 'LG';
      this.displayColor = 'orange';
    }
  }
}

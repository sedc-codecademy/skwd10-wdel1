import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  movieName: string;
  isReady: boolean;
  numberOfStudents: number = 30;
  isNull: null = null;
  isAny: any = 'test string';
  fruitArr: string[] = ['apples', 'oranges'];
  title = 'client';
  className = 'Advanced JS';

  classObj = {
    numberOfStudents: 30,
    numberOfClasses: 30,
  };
}

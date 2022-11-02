import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-navnside-wrapper',
  templateUrl: './navnside-wrapper.component.html',
  styleUrls: ['./navnside-wrapper.component.css'],
})
export class NavnsideWrapperComponent implements OnInit, OnChanges {
  @Input('data') data: any;
  @Input('pcp_Name') pcp_Name: any;
  @Input('lastlogin') last_login: any;

  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log('navnside', this.data);
  }

  ngOnInit(): void {
    // alert(this.last_login);
  }
}

import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-sub-app',
  templateUrl: './sub-app.component.html',
  styleUrls: ['./sub-app.component.css']
})
export class SubAppComponent implements OnInit {

  constructor() { }
  @Input()  size: number =9;
  @Input()  property1 ='test';
  @Input()  num:number=0;


  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
   
  }
  callPhone(x){
    console.log(x);
    console.log(this.property1);
  }

  ngOnInit() {
  }

}

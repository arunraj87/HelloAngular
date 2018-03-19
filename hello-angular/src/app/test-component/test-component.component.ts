import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector:'valid-user',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  chant:string = "Come on you Gunners!"
  constructor() {
      }

  ngOnInit() {
  }

}

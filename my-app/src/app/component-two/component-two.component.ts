import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})

export class ComponentTwoComponent implements OnInit {

  @Input() id: string;
  @Input() url: string;
  @Input() name: string;
  @Input() image: string;

  constructor() { }

  ngOnInit(): void {
  }
}

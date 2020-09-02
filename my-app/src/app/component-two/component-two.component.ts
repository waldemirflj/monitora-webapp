import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})

export class ComponentTwoComponent implements OnInit {

  // input
  @Input() id: number;
  @Input() url: string;
  @Input() name: string;
  @Input() image: string;

  // output
  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  whoIsThatPokemon(id: number): void {
    this.selected.emit(id);
  }
}

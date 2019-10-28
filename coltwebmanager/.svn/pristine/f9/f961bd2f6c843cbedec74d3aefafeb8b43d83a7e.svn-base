import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class PopupComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Input() title:string;
  @Input() button1Text;
  @Input() button2Text;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() buttonValue: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    
  }

  close() {
    console.log("clicked");
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  buttonclick(text:any) {
    this.buttonValue.emit(text);
  }
}

import { Component, Input } from '@angular/core';

export enum ButtonType {
  'button',
  'submit',
  'reset',
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
})
export class ButtonComponent {
  @Input() disabled = false;

  @Input() type: ButtonType = ButtonType.button;
}

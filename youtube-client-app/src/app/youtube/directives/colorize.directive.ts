import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

const [week, month, halfOfYear] = [7, 30, 180].map(
  (i) => i * 24 * 60 * 60 * 1000
);

enum COLORS {
  RED = '#F44336',
  YELLOW = '#FFEB3B',
  GREEN = '#4CAF50',
  BLUE = '#2196F3',
}

@Directive({
  selector: '[appColorize]',
})
export class ColorizeDirective implements OnInit {
  @Input() date!: string;

  @Input() style!: string;

  constructor(
    private readonly elemRef: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit() {
    const dateNow = new Date().getTime();
    const timeDifference = dateNow - new Date(this.date).getTime();
    let color;
    if (timeDifference <= week) color = COLORS.BLUE;
    else if (timeDifference <= month) color = COLORS.GREEN;
    else if (timeDifference <= halfOfYear) color = COLORS.YELLOW;
    else color = COLORS.RED;
    if (this.style === 'border-bottom') {
      this.renderer.setStyle(
        this.elemRef.nativeElement,
        this.style,
        `5px solid ${color}`
      );
    } else
      this.renderer.setStyle(this.elemRef.nativeElement, this.style, color);
  }
}

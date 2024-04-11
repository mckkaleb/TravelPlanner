import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-stat',
  template: `
    <div class="stat">
      <div class="stat-title">{{ title }}</div>
      <div class="stat-value"><ng-content></ng-content>{{ statValue }}</div>
      <div class="stat-desc">{{ description }}</div>
    </div>
  `,
  styles: ``
})
export class StatComponent {
  @Input() title: string = '';
  @Input() statValue: number = 0;
  @Input() description: string = '';
}

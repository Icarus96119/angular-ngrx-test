import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() icon = '';
  @Input() width = 22;
  @Input() color = 'white';

  constructor() { }

  ngOnInit(): void {
  }

}

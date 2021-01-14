import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  colors = {
    shark: '#1C1D21',
    waterloo: '#8181A5',
  };

  transform(value: string): string {
    // @ts-ignore
    return this.colors[value] || value;
  }

}

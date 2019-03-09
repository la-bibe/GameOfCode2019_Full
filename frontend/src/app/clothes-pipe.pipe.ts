import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clothesPipe'
})
export class ClothesPipePipe implements PipeTransform {

  transform(array: string[], args?: any): any {
    return array.slice().sort((a, b) => a > b ? 1 : -1 );
  }

}

import {Pipe, PipeTransform} from '@angular/core';
import {UserModel} from '../models/user-model';

@Pipe({
  name: 'orderByScore'
})
export class OrderByScorePipe implements PipeTransform {

  transform(array: UserModel[], args?: any): any {
    // @ts-ignore
    return array.slice().sort((a, b) => b.score - a.score);
  }

}

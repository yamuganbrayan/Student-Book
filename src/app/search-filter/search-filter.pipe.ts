import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: Book[], ...args: string[]): Book[] {
    if (!value) {
      return null;
    }
    if (!args) {
      return value;
    }
    const filter = args[0].toLowerCase();

    return value.filter((data) =>
      JSON.stringify(data).toLowerCase().includes(filter)
    );
  }
}

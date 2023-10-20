import { Pipe, PipeTransform } from '@angular/core';
import { ResultsItem } from '../components/results/results-item/results-item';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(results: ResultsItem[], filter: string): ResultsItem[] {
    if (!filter) return results;
    return results.filter((item) => {
      if (!filter) return true;
      return item.snippet.title.toLowerCase().includes(filter.toLowerCase());
    });
  }
}

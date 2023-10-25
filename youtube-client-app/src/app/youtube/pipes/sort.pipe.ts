import { Pipe, PipeTransform } from '@angular/core';
import { ResultsItem } from '../components/results/results-item/results-item.model';
import { Sort } from '../../core/services/sorting.service';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(results: ResultsItem[], sort: Sort): ResultsItem[] {
    if (!sort || (sort.date === 0 && sort.views === 0)) return results;
    return results.sort((a, b) => {
      if (sort.date)
        return (
          (new Date(a.snippet.publishedAt).getTime() -
            new Date(b.snippet.publishedAt).getTime()) *
          sort.date
        );
      return (
        (parseInt(a.statistics.viewCount, 10) -
          parseInt(b.statistics.viewCount, 10)) *
        sort.views
      );
    });
  }
}

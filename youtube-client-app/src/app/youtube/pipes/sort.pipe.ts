import { Pipe, PipeTransform } from '@angular/core';
import { ResultsItem } from '../components/results/results-item/results-item.model';
import { SortParam } from '../../core/services/sorting.service';
import { CustomCard } from '../pages/admin/custom-card.model';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(
    results: (ResultsItem | CustomCard)[],
    sort: SortParam
  ): (ResultsItem | CustomCard)[] {
    if (!sort || (sort.date === 0 && sort.views === 0)) return results;
    return results.sort((a, b) => {
      if (sort.date)
        return (
          (new Date(a.snippet.publishedAt).getTime() -
            new Date(b.snippet.publishedAt).getTime()) *
          sort.date
        );
      return a.statistics && b.statistics
        ? (parseInt(a.statistics.viewCount, 10) -
            parseInt(b.statistics.viewCount, 10)) *
            sort.views
        : 0;
    });
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { SortFilter } from '../components/sorting-settings/sorting-settings.component';
import { ResultsItem } from '../components/results/results-item/results-item';

@Pipe({
  name: 'sortFilter',
  pure: false,
})
export class SortFilterPipe implements PipeTransform {
  transform(value: ResultsItem[], sortFilter: SortFilter): ResultsItem[] {
    if (!sortFilter) return value;
    return value
      .sort((a, b) => {
        if (sortFilter.date === 0) return 0;
        return (
          (new Date(a.snippet.publishedAt).getTime() -
            new Date(b.snippet.publishedAt).getTime()) *
          sortFilter.date
        );
      })
      .sort((a, b) => {
        if (sortFilter.views === 0) return 0;
        return (
          (parseInt(a.statistics.viewCount, 10) -
            parseInt(b.statistics.viewCount, 10)) *
          sortFilter.views
        );
      })
      .filter((item) => {
        if (!sortFilter.term) return true;
        return item.snippet.title
          .toLowerCase()
          .includes(sortFilter.term.toLowerCase());
      });
  }
}

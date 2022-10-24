import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fiterUser'
})
export class FiterUserPipe implements PipeTransform {

  transform(value: any, sin: string): any {
    let enhancedValue = value.filter((item: any) => {
      if (item.name.includes(sin)) {
        return true
      } else {
        return false
      }
  })
  return enhancedValue
  }

}

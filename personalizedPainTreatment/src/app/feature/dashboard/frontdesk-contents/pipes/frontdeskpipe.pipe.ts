import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frontdeskpipe'
})
export class FrontdeskpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

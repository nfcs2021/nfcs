import { Pipe, PipeTransform } from '@angular/core';
import { FrontdeskEmployee, SearchModel1 } from '../frontdesk-model/frontdesk-model';

@Pipe({
  name: 'frontdeskpipe',
  pure: false
})
export class FrontdeskpipePipe implements PipeTransform {

  transform(posts: FrontdeskEmployee[], search: SearchModel1): any {
    console.log(search);

   if(posts.length === 0)
   {
    return posts;
   }

   console.table(posts);


   if(!search || !search.First_Name && !search.Last_Name ) return null;

 console.log(search);
   return posts.filter((post) => {
     return (!search.First_Name || post.First_Name.toLowerCase().startsWith(search.First_Name.toLowerCase()) ) &&
         (!search.Last_Name || post.Last_Name.toLowerCase().startsWith(search.Last_Name.toLowerCase()))
 ;
   })

 }

}

import { Pipe, PipeTransform } from '@angular/core';

import { Employee, SearchModel1 } from '../frontdeskmodule/Employee';

@Pipe({
  name: 'frontdeskpipe',
  pure: false
})
export class FrontdeskpipePipe implements PipeTransform {

  transform(posts: Employee[], search: SearchModel1): any {
    console.log(search);
   
   if(posts.length === 0) 
   {
    return posts;
   }
  
   console.table(posts);

   
   if(!search || !search.FirstName && !search.LastName ) return null;

 console.log(search);
   return posts.filter((post) => {
     return (!search.FirstName || post.FirstName.toLowerCase().startsWith(search.FirstName.toLowerCase()) ) &&
         (!search.LastName || post.LastName.toLowerCase().startsWith(search.LastName.toLowerCase()))  
         
 ;
   })

 }

}
   
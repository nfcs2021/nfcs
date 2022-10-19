import { Pipe, PipeTransform } from '@angular/core';
import { Patient, SearchModel } from '../../patinet-contents/module/Patient';

@Pipe({
  name: 'frontdeskpipe',
  pure: false
})
export class FrontdeskpipePipe implements PipeTransform {

  transform(posts: Patient[], search: SearchModel): any {
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
   
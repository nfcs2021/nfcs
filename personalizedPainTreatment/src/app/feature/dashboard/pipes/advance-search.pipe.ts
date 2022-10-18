import { Pipe, PipeTransform } from '@angular/core';
import { Patient, SearchModel } from '../patinet-contents/module/Patient';

@Pipe({
  name: 'advanceSearch',
  pure: false
})
export class AdvanceSearchPipe implements PipeTransform {
  transform(posts: Patient[], search: SearchModel): any {
    console.log(search);
   
   if(posts.length === 0) 
   {
    return posts;
   }
  
   console.table(posts);

   
   if(!search || !search.FirstName && !search.LastName && !search.dateofbirth && !search.Ssn) return null;

 console.log(search);
   return posts.filter((post) => {
     return (!search.FirstName || post.FirstName.toLowerCase().startsWith(search.FirstName.toLowerCase()) ) &&
         (!search.LastName || post.LastName.toLowerCase().startsWith(search.LastName.toLowerCase()))  &&
         (!search.dateofbirth || post.dateofbirth.toString().startsWith(search.dateofbirth)) &&
         (!search.Ssn || post.Ssn.toString().startsWith(search.Ssn))
 ;
   })
   
 }

}

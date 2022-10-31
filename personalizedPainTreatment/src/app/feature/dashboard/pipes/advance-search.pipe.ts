import { Pipe, PipeTransform } from '@angular/core';
import { Patient, SearchModel } from '../patinet-contents/module/Patient';

@Pipe({
  name: 'advanceSearch',
  pure: false
})
export class AdvanceSearchPipe implements PipeTransform {
  transform(posts: Patient[], search: SearchModel): any {
<<<<<<< HEAD
   if(posts.length === 0) 
   {
    return posts;
   }
=======
    console.log(search);

   if(posts.length === 0)
   {
    return posts;
   }

   console.table(posts);

>>>>>>> d6c14af15dfd9b46b2623d471b2ef6c874f8b7e4
   // search is blank, return post
   if(!search || !search.First_Name && !search.Last_Name && !search.Date_of_birth && !search.Ssn) return null;

   return posts.filter((post) => {
     return (!search.First_Name || post.First_Name.toLowerCase().startsWith(search.First_Name.toLowerCase()) ) &&
         (!search.Last_Name || post.Last_Name.toLowerCase().startsWith(search.Last_Name.toLowerCase()))  &&
         (!search.Date_of_birth || post.Date_of_birth.toString().startsWith(search.Date_of_birth)) &&
         (!search.Ssn || post.Ssn.toString().startsWith(search.Ssn));
   })

 }

}

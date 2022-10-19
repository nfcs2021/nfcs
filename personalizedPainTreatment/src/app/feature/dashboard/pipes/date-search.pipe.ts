import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { PatientRecord, SearchDate } from '../patinet-contents/module/Patient';

@Pipe({
  name: 'dateSearch',
  pure: false
})
export class DateSearchPipe implements PipeTransform {

  transform(patientRecords: PatientRecord[], search:SearchDate): any {
      
    console.log(patientRecords);
        var datePipe = new DatePipe("en-US");  
            
        return patientRecords.filter(proj => { 
          let value1:string|any= datePipe.transform(proj.Visit_time, 'yyyy-MM-dd');
          let value:string|any= datePipe.transform(search.fromDate, 'yyyy-MM-dd');
          let value2:string|any= datePipe.transform(search.toDate, 'yyyy-MM-dd');
          return(value1>= value && value1<=value2)});   
    }  
}

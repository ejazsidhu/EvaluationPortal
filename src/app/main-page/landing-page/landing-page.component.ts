import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { EvaluationService } from 'src/app/evaluation.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  tableData:any=[];      
  headingsList:any =[]; 
  constructor(private httpService:EvaluationService) {

   }

  ngOnInit() {
    this.getTableData();
  }

  getTableData(){
    let date='2019-04-29';//new Date();
    let obj={
      startDate:moment(date).format('YYYY-MM-DD'),
      endDate:moment(date).format('YYYY-MM-DD')
    }

    this.httpService.getData(obj).subscribe(data=>{
      // console.log(data);
      this.tableData=data;
    this.headingsList=Object.keys(data);

    },error=>{})
    

  }

  gotoNewPage(id){  
    window.open(`/home/details/${id}`,'_blank')
    }
 // [
    // {"heading":"s2", "value":["v2"]  },
    // {"heading":"s3", "value":["v3","v01","v01","v01"]  },
    // {"heading":"s4", "value":["v4"]  },
    // {"heading":"s5", "value":["v5"]  },
    // {"heading":"s7", "value":["v7"]  },
    // {"heading":"s8", "value":["v8"]  },
    // {"heading":"s9", "value":["v9"]  },
    // {"heading":"s1", "value":["vs01","vs01","vs01","vs01","vs01","vs01"] },
    // {"heading":"s10", "value":["vs01","vs01","vs01","vs01"] },
    // {
    //   "VO Code": "LHRCD-A004",
    //   "VO Name": "William John",
    //   "shop_id": 217771,
    //   "shop_code": "5194",
    //   "shop_title": "AL-SHOAIB Bakery",
    //   "address": "LAKHO DAER ROAD"},
    //   {
    //     "VO Code": "LHRCD-A004",
    //     "VO Name": "William John",
    //     "shop_id": 217772,
    //     "shop_code": "5194",
    //     "shop_title": "AL-SHOAIB Bakery",
    //     "address": "LAKHO DAER ROAD"},
    //     {
    //       "VO Code": "LHRCD-A004",
    //       "VO Name": "William John",
    //       "shop_id": 217773,
    //       "shop_code": "5194",
    //       "shop_title": "AL-SHOAIB Bakery",
    //       "address": "LAKHO DAER ROAD"},
    //       {
    //         "VO Code": "LHRCD-A004",
    //         "VO Name": "William John",
    //         "shop_id": 217774,
    //         "shop_code": "5194",
    //         "shop_title": "AL-SHOAIB Bakery",
    //         "address": "LAKHO DAER ROAD"}
  
  // ];

  // obj:Object=
  // {
  //         "VO Code": "LHRCD-A004",
  //         "VO Name": "William John",
  //         "shop_id": 217775,
  //         "shop_code": "5194",
  //         "shop_title": "AL-SHOAIB Bakery",
  //         "address": "LAKHO DAER ROAD"}
 // seprateHeadings(arr){
  //   let head=[];
  //   arr.forEach(element => {
  //     head.push(element)
      
  //   });
  //   return head;
  // }

  // getValues(object){
  //   let values:any=[];

  //  object.forEach(element => {
  //    values.push(Object.values(element))
     
  //  });
  //  console.log(values,'values')
  // }
}

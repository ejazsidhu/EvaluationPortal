import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  tableData=[
    {"heading":"s2", "value":["v2"]  },
    {"heading":"s3", "value":["v3","v01","v01","v01"]  },
    {"heading":"s4", "value":["v4"]  },
    {"heading":"s5", "value":["v5"]  },
    {"heading":"s7", "value":["v7"]  },
    {"heading":"s8", "value":["v8"]  },
    {"heading":"s9", "value":["v9"]  },
    {"heading":"s1", "value":["vs01","vs01","vs01","vs01","vs01","vs01"] },
    {"heading":"s10", "value":["vs01","vs01","vs01","vs01"] },
  
  ];
  headingsList:any =[];

  seprateHeadings(arr){
    let head=[];
    arr.forEach(element => {
      head.push(element.heading)
      
    });
    return head;
  }

  constructor() {

    this.headingsList=this.seprateHeadings(this.tableData);
    console.log(this.headingsList)
   }

  ngOnInit() {
  }

}

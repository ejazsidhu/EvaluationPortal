import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvaluationService } from 'src/app/evaluation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:any=[]
  // [
  //   {
  //     "title":"section 1",
      
  //   "section":[

  //   {
  //   "images":[
    
  //   {"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},
  //   {"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"}
    
  //   ],
    
  //   "table":[
  //   {"heading":"asdf","value":"asdf"},
  //   {"heading":"zcvb","value":"asdf"},
  //   {"heading":"werwe","value":"asdf"},
  //   {"heading":"fghg","value":"asdf"},
  //   {"heading":"jhj","value":"asdf"}
  //   ]}
  //   ]
  //   },
  //   {
  //     "title":"section 2",

  //     "section":[
  //     {

  //     "images":[
      
  //     {"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},
     
  //     ],
      
  //     "table":[
  //     {"heading":"asdf","value":"asdf"},
  //     {"heading":"zcvb","value":"asdf"},
  //     {"heading":"werwe","value":"asdf"},
  
  //     ]}
  //     ]
  //     }
    
  //   ]

  constructor(private activatedRoutes:ActivatedRoute,private httpService:EvaluationService) { 
    let id:any=0;
    this.activatedRoutes.params.subscribe(params=>{

      id=params.id;

      let obj={
        surveyId:id
      }

      this.getData(obj)
    })
  }

  ngOnInit() {
  }

  getData(obj){

    this.httpService.getShopDetails(obj).subscribe(data=>{
      this.data=data;
      console.log(this.data)
    },error=>{})

  }

}

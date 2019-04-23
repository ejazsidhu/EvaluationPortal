import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data=[
    {
      "title":"section 1",
      
    "section":[

    {
    "images":[
    
    {"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},
    {"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"}
    
    ],
    
    "table":[
    {"heading":"asdf","value":"asdf"},
    {"heading":"zcvb","value":"asdf"},
    {"heading":"werwe","value":"asdf"},
    {"heading":"fghg","value":"asdf"},
    {"heading":"jhj","value":"asdf"}
    ]}
    ]
    },
    {
      "title":"section 2",

      "section":[
      {

      "images":[
      
      {"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},{"id":1,"imageUrl":"dummayImage.png"},
     
      ],
      
      "table":[
      {"heading":"asdf","value":"asdf"},
      {"heading":"zcvb","value":"asdf"},
      {"heading":"werwe","value":"asdf"},
  
      ]}
      ]
      }
    
    ]

  constructor() { }

  ngOnInit() {
  }

}

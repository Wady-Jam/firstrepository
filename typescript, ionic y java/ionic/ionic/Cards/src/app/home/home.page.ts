import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  

    personajes=[
      {
        name:"itachi",
        poder:"sharinga",
        imagen:"https://i.imgur.com/F1FzRR3.gif"
      },
      {
        name:"sasuke",
        poder:"sharingan",
        imagen:"https://steamuserimages-a.akamaihd.net/ugc/2426754592345997263/9100924B3DB9E43B08E783C305185BB08F66C9C7/"
      },
    
      {
       name: "jiraiya",
       poder:"rasenga",
       imagen:"https://d.wattpad.com/story_parts/15/images/144b90ea5bbd6e6f.gif"
    
      }
    
    ]

  constructor() {
  }

}

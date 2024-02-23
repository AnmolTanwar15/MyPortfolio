import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "What I do💁‍♂️",
    subTitle: "CRAZY ANGULAR DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications",
      "⚡ Worked with Angular to develop single page applications.",
      "⚡ Created Typescript reusable components and services to consume REST API's using Component-based architecture.",
      "⚡ Implemented HTTP requests using RxJS Observable library to handle multiple values over time.",
      "⚡ Experience in working with the advanced JavaScript such as ECMAScript 6 (ES6)."
      // "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks",
      // "⚡ Creating application backend in Node, Express & Flask",
      // "⚡ Integration of third party services such as Firebase/ Heroku/ AWS",
      // "⚡ Experience of working with Computer Vision and NLP projects"
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Angular Developer",
        company: "IMG Global Infotech",
        color: "#3781c2",
        companylogo: "../../../assets/images/img.jpg",
        date: "Oct 2022 - present",
        // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc: "Developing and maintaining web applications using Angular and other related technologies. Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products. Implementing responsive design and ensuring cross-browser compatibility. Participating in code reviews and providing constructive feedback to other developers.",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      // {
      //   role: "Computer Science & Engineering",
      //   company: "GLA University",
      //   color: "#3f703f",
      //   companylogo: "../../../assets/images/gla.png",
      //   date: "Aug 2016 – Jul 2020",
      //   desc: "I have completed my 4 year graduation degree in computer science with overall CGPA 8.6",
      //   // descBullets: [
      //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //   // ]
      // },
      // {
      //   role: "Software Engineer Intern",
      //   company: "Innovative Buiness Solutions",
      //   color: "#ff9102",
      //   companylogo: "../../../assets/images/ibs.png",
      //   date: "Jun 2018 – Aug 2018",
      //   desc: "The 6- Week summer training focused on full-stack web development and helped learn to work in a team",
      //   },
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}

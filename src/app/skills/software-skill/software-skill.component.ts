import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-skill',
  templateUrl: './software-skill.component.html',
  styleUrls: ['./software-skill.component.scss']
})
export class SoftwareSkillComponent implements OnInit {
  skillsSection = {
    softwareSkills: [
      {
        skillName: "html-5",
        fontAwesomeClassname: "fab fa-html5"
      },
      // {
      //   skillName: "Bootstrap",
      //   fontAwesomeClassname: "fa-brands fa-bootstrap"
      // },
      {
        skillName: "css3",
        fontAwesomeClassname: "fab fa-css3-alt"
      },
      {
        skillName: "sass",
        fontAwesomeClassname: "fab fa-sass"
      },
      {
        skillName: "JavaScript",
        fontAwesomeClassname: "fab fa-js"
      },
      // {
      //   skillName: "TypeScript",
      //   fontAwesomeClassname: "fab fa-ts"
      // },
      {
        skillName: "Angular",
        fontAwesomeClassname: "fab fa-angular"
      },
      {
        skillName: "Git Hub",
        fontAwesomeClassname: "fab fa-github"
      },
      {
        skillName: "Git Lab",
        fontAwesomeClassname: "fab fa-gitlab"
      },
      {
        skillName: "Bit Bucket",
        fontAwesomeClassname: "fab fa-bitbucket"
      },
      // {
      //   skillName: "nodejs",
      //   fontAwesomeClassname: "fab fa-node"
      // },
      // {
      //   skillName: "npm",
      //   fontAwesomeClassname: "fab fa-npm"
      // },
      // {
      //   skillName: "sql-database",
      //   fontAwesomeClassname: "fas fa-database"
      // },
      // {
      //   skillName: "python",
      //   fontAwesomeClassname: "fab fa-python"
      // },
      // {
      //   skillName: "Tensorflow",
      //   fontAwesomeClassname: "logos-tensorflow"
      // },
      // {
      //   skillName: "Firebase",
      //   fontAwesomeClassname: "simple-icons:firebase"
      // }

    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from 'graphql-tag';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects2 = [];
  projects3 = [
    {
      link: "https://github.com/sarthakgoenka/portfolio",
    },
    {
      link: "",
    },
    {
      link: "https://natours-8aa57.web.app/",
    },
    {
      link: ""
    },
    {

      link: "http://node-room-chat.herokuapp.com/",
    },
    {
      link: "https://personal-doc.herokuapp.com/",

    }
  ];

  myProjects = [
    {title:"ErpWise",des:"ErpWise provides intuitive distribution software tailored for small to medium-sized businesses in the UK, optimizing inventory management, sales, and logistics with smart tools for efficiency and growth.",img:"../../../assets/images/erp.png",href:"http://159.65.80.24/auth/login"},
    {title:"eFleet Systems",des:"The eFleet Systems application is a comprehensive software solution designed to efficiently manage fleets of vehicles and the consignments they carry. It provides a centralized platform for businesses involved in transportation and logistics to monitor, track, and optimize their operations.",img:"../../../assets/images/eFleet.png",href:"https://www.efleetsystems.com/"},
    {title:"MyGames11",des:"MyGames11 Application is an immersive platform that allows sports enthusiasts to engage in virtual competitions by creating and managing their own fantasy sports teams. With a user-friendly interface and robust features, this application brings the excitement of professional sports leagues directly to users' fingertips.",img:"../../../assets/images/mg11.png",href:"https://www.mygames11.com/"},
  ]
  constructor(public apollo: Apollo) { }

  ngOnInit(): void {


    // this.apollo.query<any>({
    //   query: gql`
    //   {
    //   user(login: "sarthakgoenka") {
    //     pinnedItems(first: 6, types: [REPOSITORY]) {
    //       totalCount
    //       edges {
    //         node {
    //           ... on Repository {
    //             name
    //             description
    //             forkCount
    //             stargazers {
    //               totalCount
    //             }
    //             url
    //             id
    //             diskUsage

    //             primaryLanguage {
    //               name
    //               color
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    //   `
    // }).subscribe((data) => {
    //   this.projects2 = data.data.user.pinnedItems.edges;
    //   // console.log(this.projects2);
    // });
  }

}

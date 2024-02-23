import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    // {
    //   heading: "Infosys",
    //   duration: "Present",
    //   subtitle: "",
    //   content: "Upcoming Full stack develover at Infosys!",
    //   className1: "mar-left",
    //   className2: "prt_about_learnbox_right"
    // },
    {
      heading: "BCA - Bachelors In Computer Application",
      duration: "2023",
      subtitle: "Maharaja College, Jaipur",
      content: "Successfully completed my BCA from University Of Rajasthan, Jaipur.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "Higher Secondary(12th)",
      duration: "2020",
      subtitle: "CBSE Board",
      content: "Successfully completed my intermediate studies in 2020 from Saint Joseph Convent School, Jaipur.\n" +
        "Major: PCM.",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "Secondary Stage(10th)",
      duration: "2018",
      subtitle: "CBSE Board",
      content: "Successfully completed my high school studies in 2018 from Yugantar International School, Jaipur.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}

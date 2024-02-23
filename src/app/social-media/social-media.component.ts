import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/AnmolTanwar15",
    linkedin: "https://www.linkedin.com/in/anmoltanwar15/",
    gmail: "anmoltanwar53@gmail.com",
    instagram : "https://www.instagram.com/anmoltanwar.15/?hl=en",
    // facebook: "https://www.facebook.com/sharthak.agrawal"
  };
  constructor() { }

  ngOnInit(): void {
  }

}

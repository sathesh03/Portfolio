import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  skills = [
    { name: 'Angular', icon: 'https://img.icons8.com/color/48/angularjs.png' },
    {
      name: 'NodeJS',
      icon: 'https://img.icons8.com/color/48/000000/nodejs.png',
    },
    {
      name: 'ExpressJS',
      icon: 'https://img.icons8.com/fluency/48/000000/node-js.png',
    },
    {
      name: 'JavaScript',
      icon: 'https://img.icons8.com/color/48/javascript--v1.png',
    },
    {
      name: 'TypeScript',
      icon: 'https://img.icons8.com/color/48/typescript.png',
    },
    { name: 'HTML5', icon: 'https://img.icons8.com/color/48/html-5--v1.png' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/48/css3.png' },
    { name: 'CSS3', icon: 'https://img.icons8.com/color/48/000000/css3.png' },
    { name: 'Sass', icon: 'https://img.icons8.com/color/48/000000/sass.png' },
    { name: 'Tailwind CSS', icon: 'assets/images/skills/TailwindCSS.png' },
    {
      name: 'jQuery',
      icon: 'https://img.icons8.com/ios-filled/48/1169ae/jquery.png',
    },
    {
      name: 'Bootstrap',
      icon: 'https://img.icons8.com/color/48/bootstrap.png',
    },
    {
      name: 'MaterialUI',
      icon: 'https://img.icons8.com/color/48/000000/material-ui.png',
    },
    {
      name: 'PHP',
      icon: 'https://img.icons8.com/offices/48/000000/php-logo.png',
    },
    {
      name: 'C++',
      icon: 'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png',
    },
    {
      name: 'MSSQL (SQL Server)',
      icon: 'https://img.icons8.com/color/48/microsoft-sql-server.png',
    },
    {
      name: 'MySQL',
      icon: 'https://img.icons8.com/color/48/000000/mysql-logo.png',
    },
    {
      name: 'MongoDB',
      icon: 'https://img.icons8.com/color/48/000000/mongodb.png',
    },
    {
      name: 'PostgreSQL',
      icon: 'https://img.icons8.com/color/48/postgreesql.png',
    },
    { name: 'Git VCS', icon: 'https://img.icons8.com/color/48/git.png' },
    { name: 'GitHub', icon: 'https://img.icons8.com/color/48/github.png' },
    { name: 'NPM', icon: 'https://img.icons8.com/color/48/npm.png' },
    {
      name: 'Postman',
      icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png',
    },
    { name: 'RxJS', icon: 'assets/images/skills/rxjs_transparent.png' },
    { name: 'Karma', icon: 'assets/images/skills/karma.png' },
    { name: 'Jasmine', icon: 'assets/images/skills/jasmine.png' },
    {
      name: 'AWS',
      icon: 'https://img.icons8.com/color/48/amazon-web-services.png',
    },
    { name: 'REST API', icon: 'assets/images/skills/restapi_transparent.png' },
    { name: 'Microservice', icon: 'assets/images/skills/microservice.png' }, // fixed 000000
    { name: 'VB.NET', icon: 'assets/images/skills/vbdotnet_transparent.png' },
    { name: 'SSRS', icon: 'assets/images/skills/ssrs.png' },
    { name: 'Microsoft IIS', icon: 'assets/images/skills/microsoft-iis-transparent.png',class:"iis"},
  ];

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('scrollreveal').then((ScrollReveal) => {
        const sr = ScrollReveal.default({
          origin: 'top',
          distance: '80px',
          duration: 1000,
          reset: true,
        });

        sr.reveal('.skills .container', { interval: 200 });
        sr.reveal('.skills .container .bar', { delay: 400 });
      });
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skills = [
    { name: 'Angular', icon: 'https://img.icons8.com/color/48/angularjs.png' },
    { name: 'NodeJS', icon: 'https://img.icons8.com/color/48/000000/nodejs.png' },
    { name: 'ExpressJS', icon: 'https://img.icons8.com/fluency/48/000000/node-js.png' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/javascript--v1.png' },
    { name: 'TypeScript', icon: 'https://img.icons8.com/color/48/typescript.png' },
    { name: 'HTML5', icon: 'https://img.icons8.com/color/48/html-5--v1.png' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/48/css3.png' },
    { name: 'CSS3', icon: 'https://img.icons8.com/color/48/000000/css3.png' },
    { name: 'Sass', icon: 'https://img.icons8.com/color/48/000000/sass.png' },
    { name: 'jQuery', icon: 'https://img.icons8.com/ios-filled/48/1169ae/jquery.png' },
    { name: 'Bootstrap', icon: 'https://img.icons8.com/color/48/bootstrap.png' },
    { name: 'MaterialUI', icon: 'https://img.icons8.com/color/48/000000/material-ui.png' },
    { name: 'PHP', icon: 'https://img.icons8.com/offices/48/000000/php-logo.png' },
    { name: 'C++', icon: 'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png' },
    { name: 'MSSQL (SQL Server)', icon: 'https://img.icons8.com/color/48/microsoft-sql-server.png' },
    { name: 'MySQL', icon: 'https://img.icons8.com/color/48/000000/mysql-logo.png' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/000000/mongodb.png' },
    { name: 'PostgreSQL', icon: 'https://img.icons8.com/color/48/postgreesql.png' },
    { name: 'Git VCS', icon: 'https://img.icons8.com/color/48/git.png' },
    { name: 'GitHub', icon: 'https://img.icons8.com/color/48/github.png' },
    { name: 'NPM', icon: 'https://img.icons8.com/color/48/npm.png' },
    { name: 'Postman', icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png' },
    { name: 'RxJS', icon: 'assets/images/rxjs.png' },
    { name: 'Karma', icon: 'assets/images/karma.png' },
    { name: 'Jasmine', icon: 'assets/images/jasmine.png' },
    { name: 'AWS', icon: 'https://img.icons8.com/color/48/amazon-web-services.png' },
    { name: 'REST API', icon: 'assets/images/rest_api.png' },
    { name: 'Microservices', icon: 'assets/images/microservices.png' },  // fixed 000000
    { name: 'VB.NET', icon: 'https://img.icons8.com/color/48/000000/vb_net.png' },
    { name: 'Rdlc Report', icon: 'https://img.icons8.com/color/48/000000/rdlc.png' },
  ];
}

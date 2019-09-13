import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() {
  }
  posts = [
    {
      title: 'Mon premier post',
      date: Date,
      content: 'Type Script  is an open-source programming language developed and maintained by Microsoft. ' +
        'It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.' +
        ' TypeScript is designed for development of large applications and transcompiles to JavaScript.',
      loveIts : 3

    },
    {
      title: 'Mon deuxième post',
      date: Date,
      content: 'Node.js (Node) is an open source development platform for executing JavaScript code server-side. ' +
        'Node.js  is intended to run on a dedicated HTTP server and to employ a single thread with one process at a time. ' +
        'Node.js   applications are event-based and run asynchronously.',
      loveIts: -1

    },

    {
      title: 'Encore un post',
      date: Date,
      content: 'npm (originally short for  Node Package Manager) is a package manager for the JavaScript programming language.' +
        ' It is the default package manager for the JavaScript runtime environment Node.js.',
      loveIts: 0

    },
  ];

  ngOnInit() {
  }
}

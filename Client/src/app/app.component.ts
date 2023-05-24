import { Component, OnInit } from '@angular/core';
import { FileNode } from './file-node';
import { FileTreeService } from './file-tree.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project';
  rootNodes?: FileNode[] = [];
  folder: FileNode = {
    path: "",
    isFolder: true,
    name: ""
  }

  constructor(private fileTreeService: FileTreeService) { }

  ngOnInit(): void {
    this.changeName();
  }

  changeName() {
    if (this.folder.path != "") {

      this.fileTreeService.getChildren(this.folder).subscribe((x: any) => {

        this.rootNodes = x;

      })
    }
  }
}

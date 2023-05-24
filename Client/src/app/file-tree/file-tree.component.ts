import { Component, Input } from '@angular/core';
import { FileNode } from '../file-node';
import { FileTreeService } from '../file-tree.service';

@Component({
  selector: 'app-file-tree',
  templateUrl: './file-tree.component.html',
  styleUrls: ['./file-tree.component.css']
})
export class FileTreeComponent {
  @Input() nodes?: FileNode[];

  constructor(private fileTreeService: FileTreeService) {

    console.log(this.nodes);
  }

  toggleNode(node: FileNode): void {
    if (node.isFolder&&!node.isExpanded) {
      this.fileTreeService.getChildren(node).subscribe((x: any) => {
        var t = this.nodes?.find(x => x.name == node.name);
        if (t)
          t.children = x;
      })
    }

    node.isExpanded = !node.isExpanded;

  }
}

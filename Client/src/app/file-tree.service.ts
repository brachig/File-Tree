import { Injectable } from '@angular/core';
import { FileNode } from './file-node';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileTreeService {
  constructor(private http: HttpClient) {

  }

  getChildren(parentNode: FileNode): any {
    
    return this.http.get('https://localhost:7026/fileTree?folderName=' + parentNode?.path);
  }
}

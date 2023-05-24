export interface FileNode {
    name: string;
    isFolder: boolean;
    isExpanded?: boolean;
    children?: FileNode[];
    path: string;
}
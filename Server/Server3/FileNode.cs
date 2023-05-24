namespace Server3
{
    public class FileNode
    {
        public string Name { get; set; }
        public bool IsFolder { get; set; }
        public bool IsExpanded { get; set; }
        public List<FileNode> Children { get; set; }
        public string Path { get; set; }
    }
}

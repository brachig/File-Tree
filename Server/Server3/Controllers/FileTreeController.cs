using Microsoft.AspNetCore.Mvc;

namespace Server3.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FileTreeController : ControllerBase
    {

        public FileTreeController()
        {
            
        }

        [HttpGet(Name = "GetChildrenByFolder")]
        public List<FileNode> Get(string folderName)
        {
            var dirs = Directory.GetDirectories(folderName).Select(x => new FileNode
            {
                Path = x,
                IsFolder = true,
                IsExpanded = false,
                Name = x.Split('\\').Last()
            }).ToList();
            var files = Directory.GetFiles(folderName).Select(x => new FileNode
            {
                Path = x,
                IsFolder = false,
                IsExpanded = false,
                Name = x.Split('\\').Last()
            }).ToList();
            dirs.AddRange(files);
            return dirs.OrderBy(x=>x.Name).ToList();
        }
    }
}
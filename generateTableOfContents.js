var fs = require("fs");

function cleanFileName(file){
  return file.replace(/\.md/gi, "").replace(/-|_/gi, " ").split(" ").map(function(el){
    return el.charAt(0).toUpperCase() + el.substring(1);
  }).join(" ");
}

var file = fs.readFileSync("README.md").toString();
var markdownOutput = "";

var directories = fs.readdirSync(".").filter(function (file) {
  return fs.statSync('./' + file).isDirectory() && file != ".git";
});

directories.forEach(function(directory){
  markdownOutput += "### " + directory + "\n\n";
  var filesInTheDirectory = fs.readdirSync("./" + directory);
  filesInTheDirectory.forEach(function(file){
    if(file.match(/[^\.]+\.md/gi)) markdownOutput += "* " + "[" + cleanFileName(file) + "](" + "./" + directory + "/" + file +  ")\n";
  });
  markdownOutput += "\n";
});

fs.writeFileSync("README.md", file.substring(0, file.indexOf("## Table of Contents")) + "## Table of Contents\n" + markdownOutput + file.substring(file.indexOf("## Contributing")));

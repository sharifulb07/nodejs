
const path=require('path');

console.log("Directory Name:",path.dirname(__filename))

console.log("File Name:", path.basename(__filename))
// file extention name 
console.log("File extension name", path.extname(__filename))

const joinPath=path.join("/user","documents","node", "projects")
console.log("Join Path: ", joinPath)

// resolve path
const resolvePath=path.resolve("user", "documents", "node", "projects")
console.log("Resolve Path: ", resolvePath)

// path normalize
const normalizePath=path.normalize("./user/.documents/../node/.projects/")
console.log("Normalize Path", normalizePath)
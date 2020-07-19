const fs = require('fs'); // 文件模块
const path = require('path'); // 路径模块

let root;
function readFileList(dir, filesList = [], domain) {
  if (!dir) return;

  if (!root) {
    root = dir;
  }
  const files = fs.readdirSync(dir);
  files.forEach((item) => {
    let filePath = path.join(dir, item);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && (item !== 'assets' || item !== 'images')) {
      readFileList(path.join(dir, item), filesList, domain); //递归读取文件
    } else {
      if (filePath.endsWith('.html')) {
        // 过滤非md文件
        filesList.push(domain + cutPath(filePath, root));
      }
    }
  });
  return filesList;
}

function cutPath(url, prefix) {
  if (url && url.startsWith(prefix)) {
    return url.slice(prefix.length);
  }
  return url;
}

function writeFile(result, filename = 'urls.txt') {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, result, (err) => {
      if (!err) {
        resolve();
      }
      reject(err);
    });
  });
}

async function start() {
  const result = readFileList('dist', [], 'https://resume.yiliang.site').join(
    '\n',
  );
  await writeFile(result);
}

start();

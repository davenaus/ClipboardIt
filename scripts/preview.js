const http = require('http');
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '../build');
const port = Number(process.env.PORT || 4173);
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain', '.png': 'image/png', '.jpg': 'image/jpeg', '.ico': 'image/x-icon', '.mp4': 'video/mp4', '.webm': 'video/webm', '.webp': 'image/webp' };

http.createServer((request, response) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname); }
  catch { response.writeHead(400).end(); return; }
  if (pathname === '/blog/' || pathname === '/blog/index.html') {
    response.writeHead(308, { Location: '/blog' }).end();
    return;
  }
  let filename = path.resolve(root, '.' + pathname);
  if (filename !== root && !filename.startsWith(root + path.sep)) {
    response.writeHead(403).end(); return;
  }
  if (fs.existsSync(filename) && fs.statSync(filename).isDirectory()) filename = path.join(filename, 'index.html');
  const exists = fs.existsSync(filename) && fs.statSync(filename).isFile();
  if (!exists) filename = path.join(root, '404.html');
  response.writeHead(exists ? 200 : 404, { 'Content-Type': mime[path.extname(filename)] || 'application/octet-stream' });
  if (request.method === 'HEAD') { response.end(); return; }
  fs.createReadStream(filename).pipe(response);
}).listen(port, '127.0.0.1', () => console.log(`Clipboard It preview: http://127.0.0.1:${port}`));

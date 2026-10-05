const fs = require('fs');
const path = require('path');

function writeFile(pth, text) {
  const full = path.resolve(pth);
  const d = path.dirname(full);
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  fs.writeFileSync(full, text, 'utf8');
  console.log('++ CREATED: ' + pth);
}

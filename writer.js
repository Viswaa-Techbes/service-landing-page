const fs = require('fs');
const path = require('path');
const mode = process.argv[2]; // 'write' or 'append'
const target = process.argv[3];
const b64 = process.argv[4];
if (!mode || !target || !b64) {
  console.error('Usage: node writer.js <write|append> <file> <b64>');
  process.exit(1);
}
const dir = path.dirname(target);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}
const text = Buffer.from(b64, 'base64').toString('utf8');
if (mode === 'append') {
  fs.appendFileSync(target, text, 'utf8');
} else {
  fs.writeFileSync(target, text, 'utf8');
}
console.log('SUCCESS ' + mode + ' ' + target + ' (' + text.length + ' chars)');

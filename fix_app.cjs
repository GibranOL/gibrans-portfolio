const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(/\btext-white\b(?!(\/|\w|-))/g, 'text-slate-900 dark:text-white');
fs.writeFileSync('src/App.tsx', content, 'utf8');

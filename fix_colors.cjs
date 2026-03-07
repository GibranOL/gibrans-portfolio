const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'components');

const replacements = [
  { regex: /\btext-white\b(?!(\/|\w|-))/g, replace: 'text-slate-900 dark:text-white' },
  { regex: /\btext-white\/90\b/g, replace: 'text-slate-800 dark:text-white/90' },
  { regex: /\btext-white\/80\b/g, replace: 'text-slate-700 dark:text-white/80' },
  { regex: /\btext-white\/20\b/g, replace: 'text-slate-300 dark:text-white/20' },
  { regex: /\btext-gray-200\b/g, replace: 'text-slate-800 dark:text-gray-200' },
  { regex: /\btext-gray-300\b/g, replace: 'text-slate-700 dark:text-gray-300' },
  { regex: /\btext-gray-400\b/g, replace: 'text-slate-600 dark:text-gray-400' },
  { regex: /\bbg-white\/5\b/g, replace: 'bg-slate-200 dark:bg-white/5' },
  { regex: /\bborder-white\/10\b/g, replace: 'border-slate-300 dark:border-white/10' },
  { regex: /\bborder-white\/5\b/g, replace: 'border-slate-200 dark:border-white/5' }
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      replacements.forEach(({ regex, replace }) => {
        content = content.replace(regex, replace);
      });
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

processDirectory(directoryPath);
console.log('Done replacing classes for component text and borders.');

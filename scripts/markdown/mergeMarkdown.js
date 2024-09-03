// mergeMarkdown.ts
const fs = require('fs');
const path = require('path');

// Specify the folder containing the markdown files
const sourceFolder = '/_src';
const destFolder = '/_dist';

// Function to read all markdown files from the folder
const readMarkdownFiles = (folder) => {
  return fs.readdirSync(__dirname + folder)
    .filter(file => {
      console.log({ file });
      return file.endsWith('.md');
    })
    .map(file => fs.readFileSync(path.join(__dirname + folder, file), 'utf-8'));
};

// Merge all markdown files into a single markdown file
const mergeMarkdownFiles = (files) => {
  const combinedMarkdown = files.join('\n\n');

  // Write the merged markdown content to a new file
  fs.writeFileSync(path.join(__dirname + destFolder + `/output--${new Date().toISOString()}.md`), combinedMarkdown);
};

// Read and merge the markdown files
const markdownFiles = readMarkdownFiles(sourceFolder);
mergeMarkdownFiles(markdownFiles);

console.log('Markdown files merged successfully!');
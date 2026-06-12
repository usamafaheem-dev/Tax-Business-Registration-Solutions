const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let updated = false;
    
    // Regex to find <AnimatedHeading as="h[3-6]" ...> ... </AnimatedHeading>
    const regex = /<AnimatedHeading as="(h[3-6])"([\s\S]*?)>([\s\S]*?)<\/AnimatedHeading>/g;
    
    const newContent = content.replace(regex, (match, tag, attrs, inner) => {
        updated = true;
        return `<${tag}${attrs}>${inner}</${tag}>`;
    });
    
    if (updated) {
        content = newContent;
        // Check if there are any remaining AnimatedHeadings
        if (!content.includes('<AnimatedHeading')) {
            content = content.replace(/import AnimatedHeading from ["'].*?["'];?\r?\n?/g, '');
        }
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log('Reverted small headings in', path.basename(filePath));
    }
}

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (fullPath.endsWith('.tsx') && !fullPath.includes('AnimatedHeading.tsx')) {
            processFile(fullPath);
        }
    }
}

const targetDir = 'f:\\Web dev Project work\\Softcr8ors projects\\Agency_website\\src';
walk(targetDir);
console.log('Done reverting h3-h6 tags.');

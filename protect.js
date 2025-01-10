const fs = require('fs');
const path = require('path');
const UglifyJS = require('uglify-js');
const JavaScriptObfuscator = require('javascript-obfuscator');
const CleanCSS = require('clean-css');
const HtmlMinifier = require('html-minifier');

// Protection du JavaScript
const jsContent = fs.readFileSync('./static/js/script.js', 'utf8');

// Première passe : Uglification
const uglified = UglifyJS.minify(jsContent, {
    mangle: {
        toplevel: true,
        properties: true
    },
    compress: {
        dead_code: true,
        global_defs: {
            DEBUG: false
        },
        passes: 3
    }
});

// Deuxième passe : Obfuscation
const obfuscated = JavaScriptObfuscator.obfuscate(uglified.code, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    numbersToExpressions: true,
    simplify: true,
    stringArrayShuffle: true,
    splitStrings: true,
    stringArrayThreshold: 1,
    transformObjectKeys: true,
    unicodeEscapeSequence: false,
    debugProtection: true,
    debugProtectionInterval: true,
    disableConsoleOutput: true,
    selfDefending: true
});

// Protection du CSS
const cssContent = fs.readFileSync('./static/css/styles.css', 'utf8');
const minifiedCss = new CleanCSS({
    level: {
        1: {
            all: true
        },
        2: {
            all: true
        }
    }
}).minify(cssContent);

// Protection du HTML
const htmlContent = fs.readFileSync('./index.html', 'utf8');
const minifiedHtml = HtmlMinifier.minify(htmlContent, {
    collapseWhitespace: true,
    removeComments: true,
    removeAttributeQuotes: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true
});

// Création du dossier dist s'il n'existe pas
if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist');
}
if (!fs.existsSync('./dist/static')) {
    fs.mkdirSync('./dist/static');
}
if (!fs.existsSync('./dist/static/js')) {
    fs.mkdirSync('./dist/static/js');
}
if (!fs.existsSync('./dist/static/css')) {
    fs.mkdirSync('./dist/static/css');
}

// Écriture des fichiers protégés
fs.writeFileSync('./dist/static/js/script.js', obfuscated.getObfuscatedCode());
fs.writeFileSync('./dist/static/css/styles.css', minifiedCss.styles);
fs.writeFileSync('./dist/index.html', minifiedHtml);

// Copie des images et autres ressources statiques
const copyDir = (src, dest) => {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else if (entry.isFile() && !entry.name.endsWith('.js') && !entry.name.endsWith('.css')) {
            fs.copyFileSync(srcPath, destPath);
        }
    }
};

copyDir('./static/images', './dist/static/images');

console.log('Protection terminée ! Les fichiers protégés sont dans le dossier "dist".');

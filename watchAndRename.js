const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');

const filesToRename = {
    [path.normalize('checkout-ui-custom/checkout-instore-custom2.css')]: path.normalize('checkout-ui-custom/checkout-instore-custom.css'),
    [path.normalize('checkout-ui-custom/checkout6-custom2.css')]: path.normalize('checkout-ui-custom/checkout6-custom.css'),
};

const color = {
    reset: "\x1b[0m",
    fg: {
        red: "\x1b[31m",
        green: "\x1b[32m",
        blue: "\x1b[34m",
    },
    bg: {
        red: "\x1b[41m",
        green: "\x1b[42m",
        blue: "\x1b[44m",
    }
};

const watcher = chokidar.watch(Object.keys(filesToRename), {
    persistent: true
});

watcher.on('change', filePath => {
    const normalizedPath = path.normalize(filePath);
    console.log(`${color.fg.blue}File changed: ${normalizedPath}${color.reset}`);
    const newPath = filesToRename[normalizedPath];
    if (!newPath) {
        console.error(`${color.fg.red}No rename target found for ${normalizedPath}${color.reset}`);
        return;
    }
    fs.rename(normalizedPath, newPath, err => {
        if (err) {
            console.error(`${color.fg.red}Error renaming file ${normalizedPath} to ${newPath}:${color.reset}`, err);
        } else {
            console.log(`${color.fg.green}File ${normalizedPath} renamed to ${newPath} successfully${color.reset}`);
        }
    });
});




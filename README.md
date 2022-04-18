# CLOAK
## How to use

First, copy the cloak you want to use

Then, right click/double click on the bookmarks bar and click "Add Page"

Next, delete the current url in the url box and paste the cloak there

Finally, name the bookmark whatever you want and click "Save"

Now, to use it, just click on the bookmark! (You must be on a page other than a new tab)

## CLOAKS

### Google

`javascript:(function() {var l = document.querySelector("link[rel*='icon']") || document.createElement('link');l.type = 'image/x-icon';l.rel = 'shortcut icon';l.href = 'https://google.com/favicon.ico';document.getElementsByTagName('head')[0].appendChild(l);document.title = 'Google';})();`

### Youtube

`javascript:(function() {var l = document.querySelector("link[rel*='icon']") || document.createElement('link');l.type = 'image/x-icon';l.rel = 'shortcut icon';l.href = 'https://youtube.com/favicon.ico';document.getElementsByTagName('head')[0].appendChild(l);document.title = 'Youtube';})();`

### ProgressBook / Grades

`javascript:(function() {var l = document.querySelector("link[rel*='icon']") || document.createElement('link');l.type = 'image/x-icon';l.rel = 'shortcut icon';l.href = 'https://paccess.mveca.org/favicon.ico';document.getElementsByTagName('head')[0].appendChild(l);document.title = 'Grades | ProgressBook';})();`
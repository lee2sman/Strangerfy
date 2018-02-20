# Strangerfy, a simple starter framework for websites with online art projects

Strangerfy is a framework for quickly creating any website and online art project. Specifically it gives you great starter CSS styling, the basic minimum html pages you need, and a link to [P5JS](http://p5js.org) library with a bare minimum *sketch* on a *<canvas>* element that is overlaid on top of your index page. 

It is ultra-minimal and uses several great frameworks and tools as components that are glued together in a rather simple package. I have argued against using frameworks since they can simplify and render all sites to look about the [same](http://getbootstrap.com). Strangerfy is my attempt at an ultra-minimal framework that just sticks together the bare minimum so you can get started and throws in my favorite javascript framework P5JS. 

I have made the somewhat non-traditional choice to place a starter background gradient! You can easily change this gradient or remove it by opening up the css/style.css file.

Strangerfy is intended as a digital erector set or toolbox that I've formalized here because most of the time I begin a web project and start with these parts and it made sense for me just to put them together in an easy-to-copy and deploy manner.

# Getting Started

1. [Download](https://github.com/lee2sman/Strangerfy/archive/master.zip) and unzip strangerfy.
2. Open the *index.html* file in your favorite text editor and start writing in HTML.
3. OR copy the markdown-template.md file and edit away. When done, convert the markdown to HTML and it will use the included CSS stylesheets. *Note: If you create markdown or other html pages in a subfolder you'll need to adjust the proper path to the CSS stylesheets.*  
4. Modify the *sketch.js* with Javascript or use the p5js template.
5. That's about it. Launch a local server in the folder (such as ```python -m SimpleHTTPServer``` and visit localhost:8000 in your web browser) or post your full site on a server, on GitHub pages, or elsewehere.
6. To modify fonts, change or remove background gradient or make other custom changes, open up and modify ```css/style.css```. To replace or remove a stylesheet, delete or comment out a line in the index.html file.

# Methodology
My methodology here is to create some basic starter HTML and CSS including some nice basic font-sizes,spacing, widths, margins, etc. As of this year (2018) I've been using lots of gradients as page backgrounds, so it includes a gradient starter and some Google font starter. I also include the [P5JS](http://p5js.org) library derived from [Processing](http://processing.org) for its ease-of-use and fun in creating online artworks and projects. 

This is easily modular. Comment out any component in the index file's *head* section you don't want to use, or remove it altogether.

# Components and inspirations

* HTML starter index page - *ultra* minimal HTML page. You know the deal.
* [normalize.css](https://github.com/necolas/normalize.css/) to reset browser defaults - OPTIONAL
* [Sakura](https://github.com/oxalorg/sakura), which provides excellent basic sizing, styling that I've used as starter CSS 
* [P5JS](http://p5js.org) library for working with the canvas. This canvas is layered on my HTML/body content and includes the P5DOM library to modify the DOM as an alternative to jQuery.
* [Shade](http://jxnblk.com/shade/) is a good link to a simple but nice gradient generator for CSS.Maybe I should integrate this with SASS (ADDED to TODO)
* This great short [article](http://pierrickcalvez.com/journal/a-five-minutes-guide-to-better-typography) on a five minute guide to better typography

# Why use this?
* Quick prototyping. You don't need to spend any time configuring anything and you'll have a unique, colorful, contemporary and minimal (and perhaps strange) site out-of-the-box. Of course you can easily jump in and customize to your liking.
* Works well with Markdown -> HTML pages 
* Could be easily combined with other any other frameworks, for example [Tachyons](http://tachyons.io)

# Why is it called Strangerfy?
* Because that sounds opposite [Normalize](https://github.com/necolas/normalize.css/)

# TODO - possible ways to extend this
* Generate gradient on the fly each time a page is created (via Sass)
* Choose from several good starter fonts randomly (same as above)
* Could be integrated back into Jekyll with Liquid for the ultimate blogging/static site generation


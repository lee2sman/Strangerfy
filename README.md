# Strangerfy, a simple starter framework for web-based sites and online art projects

Strangerfy is a framework for quickly creating any website and/or online art project. It is ultra-minimal and uses several great frameworks and tools as components that are glued together in a rather simple package. I have argued against using frameworks since they can simplify and render all sites to look about the [same](http://getbootstrap.com). Strangerfy is my attempt at an ultra-minimal framework that just sticks together the bare minimum so you can get started and throws in my favorite javascript framework P5JS and generates random background colors and styles each time it's viewed. It is intended as a digital erector set or toolbox that I've formalized here because most of the time I begin a web project and start with these parts and it made sense for me just to put them together in an easy-to-copy and deploy manner.

My methodology here is to create some basic starter HTML and CSS including some nice basic font-sizes,spacing, widths, margins, etc. As of this year (2018) I've been using lots of gradients as page backgrounds, so it includes a gradient generator and oh, what the heck, some nice Google font starters. I also include the [P5JS](http://p5js.org) library derived from [Processing](http://processing.org) for its ease-of-use and fun in creating online artworks and projects. 

This is easily modular. Comment out any component in the index file's *head* section you don't want to use, or remove it altogether.

# Component (inspirations)

* HTML starter index page - *ultra* minimal HTML page. You know the deal.
* [normalize.css](https://github.com/necolas/normalize.css/) to reset browser defaults - OPTIONAL
* [Sakura](https://github.com/oxalorg/sakura), which provides excellent basic sizing, styling that I've used as starter CSS 
* [P5JS](http://p5js.org) library for working with the canvas. I sometimes layer this canvas on my HTML content and use the P5DOM library to modify the DOM as an alternative to jQuery.
* [Shade](http://jxnblk.com/shade/) simple but nice gradient generator for CSS.

# Why use this?
* Quick prototyping. You don't need to spend any time configuring anything and you'll have a unique, colorful, contemporary and minimal site out-of-the-box. Of course you can easily jump in and customize to your liking.
* Works well with Markdown -> HTML pages (thanks to Sakura starter)
* Different colors and font every time

# Why is it called Strangerfy?
* Because that sounds opposite [Normalize](https://github.com/necolas/normalize.css/)

## Writing Components, Part 1: The Basics

Let's say you have an A-Frame page with a list of things that are really bugging you (on [Glitch]()):

```HTML
<a-scene>
    <a-text value="What's Really Bugging Me"  position="-1.1 2.5 -1.5" color="black" font="kelsonsans"></a-text>
    <a-text value="Waking up Early"           position="-1.1 1.0 -1.5" color="red" font="kelsonsans"></a-text>
    <a-text value="The News"                  position="-1.1 2 -1.5"   color="red" font="kelsonsans"></a-text>
    <a-text value="My Knees"                  position="-1.1 1.5 -1.5" color="red" font="kelsonsans"></a-text>
    <a-sky color="lightyellow"></a-sky>
</a-scene>
```

Suppose you wanted to create an attribute called bugs-me-less, which if you added to one of the things that that were really bugging you would make the text a little more transparent/opaque and slightly smaller:

```HTML
    <a-text value="My Knees" bugs-me-less       position="-1.1 1.5 -1.5" color="red" font="kelsonsans"></a-text>
```
To make the attribute work, you'd need to create a component. Here's how:

```JavaScript
<script>
    AFRAME.registerComponent('bugs-me-less', {
Let's break it down:

```
AFRAME.registerComponent('bugs-me-less', {
```

AFRAME.registerComponent creates a component.

```
    init: function () {
```

init tells A-Frame,  when an HTML tag/element, like a-text in our example, is created (i.e. "initialized"), run the code in this function. In this case, that means that when you go to this page, it runs as this script on every HTML element that has the bugs-me-less attribute

NOTE: normally when you create a function, you give it a name; when you need to use the function, you just call it by its name. But in this case we don't need a name for the function because we are only using the code in this one situation. This cutter function is known as an "anonymous function."
        var el = this.el;

        el.setAttribute('opacity', 0.2);
        el.object3D.scale.set(0.9, 0.9, 1);

    }
    });
</script>
```




// el = an HTML element/tag that's using this component 

Scale documentation says this is much faster than using setAttribute




[NOTE: remind people about the debugger: with JavaScript and with HTML, if it breaks it won't tell you on the screen]

The hardest thing about getting used to programming in A-Frame isn't JavaScript if you don't know it. The hardest part
- Learning the APIs, conventions, etc.
- Learning the ideas behind them

For example, scale: looks weird because weight, 3D object? But remember, VR/AR is three-dimensional space.


Now you try it: Modify the Component


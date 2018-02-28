## Creating a Basic Primitive



One of the nice features of A-Frame is that adding your own custom HTML tags, also known as primitives, isn't too complicated.

For example, suppose you frequently add [Google Blocks](https://vr.google.com/blocks/) to your A-Frame pages. The 3d.io A-Frame library has a nice [component](https://3d.io/docs/api/1/aframe-components.html#gblock) for using Google Blocks:

```html
<head>
  <script src="https://aframe.io/releases/0.7.0/aframe.min.js"></script>
  <script src="https://dist.3d.io/3dio-js/1.x.x/3dio.min.js"></script>
</head>
<body>
  <a-scene>
    <a-entity gblock="https://poly.google.com/view/ewsXLyr8OPu" position="0 0 -2.311"></a-entity>
  </a-scene>
</body>
```

(see it [in action](code/010-gblock.html)

Since you're frequently using it, it might make more sense to turn it into a primitive. That way, your A-Frame code might look like this:

```html
<a-scene>
  <google-block src="ewsXLyr8OPu" position="0 0 -2.311"></google-block>  
  <google-block src="bf6_h_1wp2D"  scale="0.03 0.03 0.03" position="0 1.5 -2.311"></google-block>  
</a-scene>
```

Here's what it would take to create the Google-block primitive:

```js
<script>
    AFRAME.registerPrimitive('google-block', {
    defaultComponents: {
        googleblock: {},
    },
    mappings: {
        src: 'googleblock.src'
    }
    });

AFRAME.registerComponent('googleblock', {
    schema: {
    src: {type: 'string'}
    },
    init: function () {       
    this.el.setAttribute('gblock', 'https://poly.google.com/view/' + this.data.src);
    }
});
</script>
```

Let's break it down.

First, we tell A-Frame that we want to create a primitive called google-block:

```js
AFRAME.registerPrimitive('google-block', {
```

Then we tell A-Frame what components it should include:

```js    
defaultComponents: {
  googleblock: {},
},
```

In this case, it's just the component we define below, googleblock.

We don't have to include Components like position or scale; they are automatically part of any primitive, because every primitive is an a-entity.

Next, we tell A-Frame how to translate or "map" our new primitive's attributes. If you remember our example HTML:

```html
<google-block src="ewsXLyr8OPu" position="0 0 -2.311"></google-block>  
```

We use 2 attributes: **src** and **position**. We don't need to explain what to do with position; A-Frame knows how to handle anything having to do with an entity. But what about src?  We have to tell it using what's called a mapping:

```js
mappings: {
  src: 'googleblock.src'
}
```

That tells A-Frame that where it sees src, it should call the googleblock component and give it a parameter of src.

Now it's time to create the googleblock component:

```js
AFRAME.registerComponent('googleblock', {
```

As we did in the component lessons, we can use a schema to tell A-Frame that it's being passed a parameter, in this case src:

```js
schema: {
    src: {type: 'string'}
},
```

Now we are finally ready to do something. We want to create the same effect as the original HTML that used the gblock component:

```html
<a-entity gblock="https://poly.google.com/view/ewsXLyr8OPu" position="0 0 -2.311"></a-entity>
```

How do we do that? How do we call the gblock component? Turns out it's easy:

```js
init: function () {       
  this.el.setAttribute('gblock', 'https://poly.google.com/view/' + this.data.src);
}
```

As you will recall from the component lesson, a component is a way of creating a custom attribute. So all we need to do is set the gblock attributeFor this entity. What do we set it to? The google-block primitive doesn't send the full poly.google.com URL, it just sends the last part that references a particular Google Block. So all we need to do is join the poly.google.com/view URL with the src that was passed to the component.

(if you don't remember what this.el or this.data do, go back and take a look at the component lessons)

And we're all set!



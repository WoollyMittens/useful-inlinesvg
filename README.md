# inlinesvg.js: Insert SVG images inline.

*DEPRICATION WARNING: the functionality in this script has been superceeded / trivialised by updated web standards.*

Insert external images as embedded SVG.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="css/inlinesvg.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="js/inlinesvg.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'js/inlinesvg.js'
], function(Spinner) {
	...
});
```

Or use imported as a component in existing projects.

```js
@import {inlinesvg} from "js/inlinesvg.js";
```

## How to start the script

```javascript
inlineSvg(element);
```

**'element' : {DOM node}** - The SVG image to embed inline.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens).

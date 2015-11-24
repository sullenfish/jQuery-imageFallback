# jQuery-imageFallback
jQuery plugin to allow specification of any number of fallback images, including a custom broken image placeholder.

## Usage:

```JavaScript
// Use built-in broken image placeholder instead of browser default
$('img').imageFallback();

// Try alternate image if image fails to load
$('img').imageFallback('/some/alternate/image.png');

// Try each alternate image in the array
$('img').imageFallback(['/first/alternate/image.png', '/second/alternate/image.png']);

// If none of the images loads successfully, use the supplied image as the broken image placeholder
$('img').imageFallback(['/first/alternate/image.png', '/second/alternate/image.png'], 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAD1BMVEX+/v7///+xsbHl5eX////h369FAAAAAnRSTlMAAHaTzTgAAABgSURBVHgB3dNBCkMxCADROuP9z1xSSpBWfsBlZhXIWym+4tBlgFIP8hvIAaSw/2cglSewegB+mgAwFRQzK9ghLBko7ajZD2IAoJp/gBIgCwHdLkRTEJ2BWgN+uu0uDr0B4XUFsa/5KfQAAAAASUVORK5CYII=');
```
## Basic Example:

```HTML
<img id="fred" src="img/fred.png" />
```
```JavaScript
$('#fred').imageFallback(['/img/fred.png', '/lib/img/fred.png', '/lib/img/png/fred.png', 'images/fred.png', '/images/fred.png']);
```

## Complex Example:

```HTML
<img id="fred" src="img/fred.png" />
<img id="nicole" src="img/nicole.png" />
```
```JavaScript
var paths = ['/img/', '/lib/img/', '/lib/img/png/', 'images/', '/images/'];
$('img').each(function(){
	var self = $(this)
	,	file = self.prop('src').split('/').pop()
	,	srcs = $.map(paths, function(path) {
		return path + file;
	});
	self.imageFallback(srcs);
});
```

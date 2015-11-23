(function($) {
	var defaultSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAD1BMVEX+/v7///+xsbHl5eX////h369FAAAAAnRSTlMAAHaTzTgAAABgSURBVHgB3dNBCkMxCADROuP9z1xSSpBWfsBlZhXIWym+4tBlgFIP8hvIAaSw/2cglSewegB+mgAwFRQzK9ghLBko7ajZD2IAoJp/gBIgCwHdLkRTEJ2BWgN+uu0uDr0B4XUFsa/5KfQAAAAASUVORK5CYII=';
	var methods = {
		update: function(src, srcList, alternateSrc) {
			if (src.length === 0) {
				this.src = alternateSrc ? alternateSrc : defaultSrc;
			} else {
				this.src = src;
				$(this).imageFallback(srcList, alternateSrc);
			}
		}
	};
	$.fn.imageFallback = function() {
		var src = ''
		,	srcList = []
		,	alternateSrc;
		if (arguments.length > 0) {
			switch(typeof arguments[0]) {
				case 'object':
					if ($.isArray(arguments[0])) {
						srcList = arguments[0];
						do {
							src = srcList.shift();
							src = typeof src === 'string' ? src : '';
						} while (src.length === 0 && srcList.length !== 0);
					}
					break;
				case 'string':
					src = arguments[0];
					break;
			}
			if (typeof arguments[1] === 'string') {
				alternateSrc = arguments[1];
			}
		}
		return this.each(function() {
			if (this.complete && this.naturalHeight === 0 && this.naturalWidth === 0) {
				methods.update.apply(this, [src, srcList, alternateSrc]);
			} else if (!this.complete) {
				$(this).one('error', function(){
					methods.update.apply(this, [src, srcList, alternateSrc]);
				});
			}
		});
	};
}( jQuery ));

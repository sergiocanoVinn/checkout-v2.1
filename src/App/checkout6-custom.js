
//Custom
import '../Custom';

//Routes
import '../Routes'

$(window).on("load", function () {
	const ReactReady__ = setInterval(() => {
		const { React, ReactDOM } = window;
		if (React && ReactDOM) {
			clearInterval(ReactReady__);
			$(window).trigger("reactReady");
		}
	}, 50); 
});

$(window).on("load", function () {

	console.log("USANDO VITE CLEAN") 

	const VtexReady__ = setInterval(() => {
		const { vtexjs } = window;
		if (vtexjs) {
			clearInterval(VtexReady__);
			$(window).trigger("vtexjsReady");
		}
	}, 50);
}); 
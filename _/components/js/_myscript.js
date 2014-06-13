$(function() {

	//make menus frop automatically
	$('ul.nav li.dropdown').hover(function() {
		$('.dropdown-menu', this).fadeIn();
	}, function() {
		$('.dropdown-menu', this).fadeOut('fast');
	});//hover

});//jQuery is loaded

$(function(){

	$(window).scroll(function() {


		$('#branding').hi66de('slow');

	});

});//JQuery is loaded


//<body onload="myFunction()">


/*var aElements = document.getElementsByTagName('a');
var sPrefixStr = "Found element: ";
var cElems = aElements.length;
for (var j = 0; j < cElems; j++) {
	alert(sPrefixStr + aElements[i].tagName)
};
*/
$(document).ready(function() {
	alert("This page is loaded")
});
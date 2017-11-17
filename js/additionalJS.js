
// This code accounts for overlapping content when using anchor jumps by hashs with sticky navigation
//Unfortunatly I couldn't find a solution for repetitive clicks on the same nav entry
var shiftWindow = function() { scrollBy(0, -66) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
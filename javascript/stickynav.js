//Macht die NavBar Sticky
// Wenn der Benutzer die Seite scrollt, führe "myFunction" aus
window.onscroll = function() {myFunction()};

// Hol Dir den Header
var header = document.getElementById("myHeader");

// Hol Dir die Offset-Position der Navbar
var sticky = header.offsetTop;

// Füge die sticky classe hinzu, wenn die Scroll-Position erreicht wird. Entferne "sticky" wenn die Scrollposition wieder verlassen wird.
function myFunction() {
    if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    } else {
                header.classList.remove("sticky");
            }
}
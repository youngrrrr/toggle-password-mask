/* Requires jQuery v2.1.4 */

/* Initialize global variables */
var toggleIcon = $(".toggle-icon");
var passwordField = $(".toggle-password");

/* Makes sure icon size is consistent with respect
   to input password field */
var toggleIconSize = passwordField.height();
toggleIcon
	.height(toggleIconSize)
	.width(toggleIconSize);

/* Hide/show password logic */
toggleIcon
	/* disables dragging of image 
	   (mostly aesthetic) */
	.on("dragstart", function(event) {
		event.preventDefault();
	})
	/* if a user moves their mouse,
	   hide password again */
	.mousemove(function() {
		hidePassword();
	})
	/* user must click and hold to 
	   show password */
	.mousedown(function() {
		showPassword();
	})
	/* if a user releases mouse,
	   hide password again */
	.mouseup(function() {
		hidePassword();
	});

/*  */
function showPassword() {
	/* Change image properties:
	   (1) replaces image to seeing eye
	   (2) changes alternate text value */
	toggleIcon.attr("src", "assets/images/show.png"); //(1)
	toggleIcon.attr("alt", "SHOW"); //(2)

	/* Change input field to type text to show password. */
	passwordField[0].type = "text"; //show password
}

function hidePassword() {
	/* Change image properties:
	   (1) replaces image to crossed out eye
	   (2) changes alternate text value */
	toggleIcon.attr("src", "assets/images/hide.png"); //(1)
	toggleIcon.attr("alt", "HIDE"); //(2)

	/* Change input field to type password to hide it again. */
	passwordField[0].type = "password";
}
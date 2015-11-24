var toggleIcon = $(".toggle-icon");
var passwordField = $("#password-field")[0];

toggleIcon
	.on("dragstart", function(event) {
		event.preventDefault();
	})
	.mousemove(function() {
		hidePassword();
	})
	.mousedown(function() {
		showPassword();
	})
	.mouseup(function() {
		hidePassword();
	});

function showPassword() {
	toggleIcon.attr("src", "assets/images/show.png");
	toggleIcon.attr("alt", "SHOW");
	passwordField.type = "text";
}

function hidePassword() {
	toggleIcon.attr("src", "assets/images/hide.png");
	toggleIcon.attr("alt", "HIDE");
	passwordField.type = "password";
}
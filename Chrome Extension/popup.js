	$(document).ready(function() {   // load the function after DOM ready.


	var link1=chrome.extension.getURL("img/logo.png");     //get absolute path of the file residing your extension.
	var t1='<div id="pop"><a href=""><input type="button" id="quotes" style="width: 110%" value="Dont Let Social Media Get You Down"/></a></div>'    //now set the src to absolute path.
	$(".StaticLoggedOutHomePage").prepend(t1);     //insert icon into corner


	var link3=chrome.extension.getURL("img/logo.png");
	var t2='<div id="pop_bg" style="height: 100%; width: 100%;"></div><div id="mgt_popup"><span class="popup_close"></span><div><img id="logo" src="'+link3+'"/></div><div id="pop_inner"><label id="user"></label><input type="button" id="mindful" value="Be Mindful"/></div></div>'
	$(".StaticLoggedOutHomePage").append(t2);

	$("#pop").click(function() {
	event.preventDefault(); //first stop default behaviour of anchor.
	$("#pop_bg").css("display", "block"); //show pop-up background.
	$("#mgt_popup").css("display", "block"); //show pop-up div.
	$("#user").html("Don't let social media affect your mental health. Stay present. Stay mindful.<br><br>");
	});

	var close=chrome.extension.getURL("img/close.png")
	
	$(".popup_close").click(function(){ //click close symbol hides popup
	$("#pop_bg").css("display", "none");
	$("#mgt_popup").css("display", "none");
	});

	$("#mindful").click(function() { 
	$("#pop_bg").css("display", "none");
	$("#mgt_popup").css("display", "none");
	window.open("https://www.mindful.org/before-you-scroll-try-this-social-media-practice/");
	});
	});
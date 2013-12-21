function showevent(){
	var xmlhttp;

			 if (window.XMLHttpRequest)
			 {
				xmlhttp=new XMLHttpRequest();
			 }
			 else
			 {
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			 }
			 
			 
			xmlhttp.open("GET", "http://subictacular.com/events.php", true);
			console.log("Events Fetched");
			xmlhttp.send();
			console.log("DONE AGAIN!");
			
			xmlhttp.onreadystatechange=function()
			 {
			 if (xmlhttp.readyState==4 && xmlhttp.status==200)
				 {
				 document.getElementById("topten").innerHTML=xmlhttp.responseText;
				 
				 console.log("Events Showed.");

				 }
			 }
}
function showvid(){
	var xmlhttp;

			 if (window.XMLHttpRequest)
			 {
				xmlhttp=new XMLHttpRequest();
			 }
			 else
			 {
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			 }
			 
			 
			xmlhttp.open("GET", "http://subictacular.com/blackberry/vidgal.php", true);
			console.log("Video Fetched");
			xmlhttp.send();
			console.log("DONE AGAIN!");
			
			xmlhttp.onreadystatechange=function()
			 {
			 if (xmlhttp.readyState==4 && xmlhttp.status==200)
				 {
				 document.getElementById("vid").innerHTML=xmlhttp.responseText;
				 
				 console.log("VideoShowed.");

				 }
			 }
}
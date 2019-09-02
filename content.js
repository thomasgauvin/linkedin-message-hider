console.log("chrome extension ready to go");

$(document).ready(function(){
	console.log("document ready good");
	
	var mainLoop = setInterval(function(){
	checkAndDeleteMessage();},400);
});

function checkAndDeleteMessage(){
	console.log('checking');
	messageDivs = document.getElementsByClassName("msg-conversation-listitem");
	toDelete = [];
	for(var elem of messageDivs){
		if(elem.innerHTML.toLowerCase().indexOf("do you know who i should contact") != -1 ||
		elem.innerHTML.toLowerCase().indexOf("do you know who i should") != -1 ||
		elem.innerHTML.toLowerCase().indexOf("do you know who i should reach out to")!=-1 ||
	   	elem.innerHTML.toLowerCase().indexOf("do you know who i should get in contact with")!=-1){
			   elem.parentNode.removeChild(elem);
			   console.log("deleted:");
			   console.log(elem);
		   }
	}
}



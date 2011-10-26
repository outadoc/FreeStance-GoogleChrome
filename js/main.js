var code;
var hd;

var hasBeenPressed;
var longPressTimeoutID;

function mousedown(key)
{
	var date = new Date();
	firstTimeStamp = date.getTime();
	
	longPressTimeoutID = setTimeout(function(){
		callKey(key, true);
		hasBeenPressed = true;
	}, 600);
}

function mouseup(key)
{
	if(code == null)
		window.open("options.html");
		
	else
	{
		if(!hasBeenPressed)
		{
			clearTimeout(longPressTimeoutID);
			longPressTimeoutID = null;
			callKey(key, false);
		}
	}
	
	hasBeenPressed = false;
}

function getItem(key)
{
	return window.localStorage.getItem(key);
}

function callKey(key, isLong)
{
    //var req = new XMLHttpRequest(); 
	//req.open("GET", "http://" + hd + ".freebox.fr/pub/remote_control?code=" + code + "&key=" + key + "&long=" + isLong.toString(), true);
	console.log('calling url for hd=' + hd + ', code=' + code + ', key=' + key + '; long press:' + isLong.toString());
	//req.send(null);
}

code = getItem("code");
hd = getItem("hd");
var firstTimeStamp;
var code;
var hd;
var gotVariables = false;

function mousedown()
{
	var date = new Date();
	firstTimeStamp = date.getTime();
}

function mouseup(key)
{
	if(getItem("code") == null)
	{
		firstTimeStamp = 0;
		window.open("options.html");
	}
	else
	{
		var date = new Date();
		var secondTimeStamp = date.getTime();
		var difference = secondTimeStamp - firstTimeStamp;
	
		if(gotVariables != true)
		{
			code = getItem("code");
			hd = getItem("hd");
			gotVariables = true;
		}

		if(difference >= 700)
			var longString = "&long=true";
		else
			var longString = "";
		
        var req = new XMLHttpRequest(); 
		req.open("GET", "http://" + hd + ".freebox.fr/pub/remote_control?code=" + code + "&key=" + key + longString, true); 
		req.send(null); 
		firstTimeStamp = 0;
	}
}

function getItem(key) {
    var value;
	value = window.localStorage.getItem(key);
    return value;
}

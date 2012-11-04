var code;
var hd;
var profileSelect;

var hasBeenPressed;
var longPressTimeoutID;

function mousedown(key)
{
	var date = new Date();
	firstTimeStamp = date.getTime();
	
	longPressTimeoutID = setTimeout(function(){
		callKey(key, true);
		hasBeenPressed = true;
	}, 700);
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

function callKey(key, isLong)
{
    var req = new XMLHttpRequest(); 
	req.open("GET", "http://" + "hd" + hd + ".freebox.fr/pub/remote_control?code=" + code + "&key=" + key + "&long=" + isLong.toString(), true);
	console.log('calling url for hd=' + hd + ', code=' + code + ', key=' + key + '; long press:' + isLong.toString());
	req.send(null);
}

function getValues()
{
	code = getItem('profile' + profileSelect.value + '.code', '');
	hd = getItem('profile' + profileSelect.value + '.hd', 1);
}

$(window).unload(function() {
	setItem('profileToUse', profileSelect.value);
});

$(window).load(function() {
	profileSelect = document.getElementById('profile');
	profileSelect.value = getItem('profileToUse', 1);
	getValues();
});
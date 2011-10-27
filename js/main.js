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

function getItem(key, defaultReturn)
{
    var value = window.localStorage.getItem(key);
    
    if(value == null)
    {
    	value = defaultReturn;
    }
    
	return value;
}

function setItem(key, value) 
{
	try {
		window.localStorage.removeItem(key);
		window.localStorage.setItem(key, value);
    } catch(e) {
		console.log('Error inside setItem');
		console.log(e);
	}
}

function callKey(key, isLong)
{
    //var req = new XMLHttpRequest(); 
	//req.open("GET", "http://" + hd + ".freebox.fr/pub/remote_control?code=" + code + "&key=" + key + "&long=" + isLong.toString(), true);
	console.log('calling url for hd=' + hd + ', code=' + code + ', key=' + key + '; long press:' + isLong.toString());
	//req.send(null);
}

function getValues()
{
	code = getItem('profile' + profileSelect.value + '.code', '');
	hd = getItem('profile' + profileSelect.value + '.hd', 1);
}

function popupUnload()
{
	setItem('profileToUse', profileSelect.value);
}

function popupLoad()
{
	profileSelect = document.getElementById('profile');
	profileSelect.value = getItem('profileToUse', 1);
	
	getValues();
}
function getFields() 
{
	var profileSelect = document.getElementById('profile');
	var codeField = document.getElementById('code');
	var hdSelect = document.getElementById('hd');
	
	var codeValue = getItem('profile' + profileSelect.value + '.code', '');
	var hdValue = getItem('profile' + profileSelect.value + '.hd', 1);
	
	codeField.value = codeValue;
	hdSelect.value = hdValue;
}
  
function saveFields()
{
	var profileSelect = document.getElementById('profile');
	var codeField = document.getElementById('code');
	var hdSelect = document.getElementById('hd');
	
	setItem('profile' + profileSelect.value + '.code', codeField.value);
	setItem('profile' + profileSelect.value + '.hd', hdSelect.value);
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

function getItem(key, defaultReturn)
{
    var value = window.localStorage.getItem(key);
    
    if(value == null)
    {
    	value = defaultReturn;
    }
    
	return value;
}
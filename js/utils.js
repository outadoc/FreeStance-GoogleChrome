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
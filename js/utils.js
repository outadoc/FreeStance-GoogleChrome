function getItem(key, defaultReturn) {
	try {
	    var value = window.localStorage.getItem(key);
	    if(value == null)
	    	value = defaultReturn;
    } catch(e) {
		console.log('Error inside getItem');
		console.log(e);
	}
    
	return value;
}

function setItem(key, value) {
	try {
		window.localStorage.removeItem(key);
		window.localStorage.setItem(key, value);
    } catch(e) {
		console.log('Error inside setItem');
		console.log(e);
	}
}

function removeItem(key) {
	try {
		window.localStorage.removeItem(key);
	} catch(e) {
		console.log('Error inside removeItem');
		console.log(e);
	}
}

//retro-compatibility check
var code = getItem('code', null);
var hd = getItem('hd', null);

if(code != null && hd != null) {
	setItem('profile1.code', code);
	setItem('profile1.hd', hd.replace('hd', ''));
	
	removeItem('code');
	removeItem('hd');
}
function getFields() {
	var codeField= document.getElementById('code');
	var hdSelect = document.getElementById('hd');
	var codeValue = getItem("code");
	var hdValue = getItem("hd");
	
	if(codeValue != "undefined") {
	codeField.value = codeValue;
	}
	
	if(hdValue != "undefined") {
	hdSelect.value = hdValue;
	}
  }
  
  function saveFields() {
	var codeField = document.getElementById('code');
	var hdSelect = document.getElementById('hd');
	var ok_label = document.getElementById('oktext');
	
	setItem("code", codeField.value);
	setItem("hd", hdSelect.value);
	ok_label.textContent = "Enregistré !";
	var timeout = setTimeout("clearSavedLabel()", 2000);
  }

  function clearSavedLabel()
  {
	var ok_label = document.getElementById('oktext');
	ok_label.textContent = "";
  }
  
  function setItem(key, value) {
    try {
      window.localStorage.removeItem(key);
      window.localStorage.setItem(key, value);
    }
	catch(e) {
      console.log("Error inside setItem");
      console.log(e);
    }
  }
  function getItem(key) {
    var value;
    try {
      value = window.localStorage.getItem(key);
    }
	catch(e) {
      console.log("Error inside getItem() for key:" + key);
	  console.log(e);
	  value = "null";
    }
    return value;
  }

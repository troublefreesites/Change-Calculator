calculate.addEventListener("click", changeGenerator);


function changeGenerator() {
	var exactChange = parseInt(document.getElementById("cents").value);
	
	if (exactChange >= 0 && exactChange < 5) {
		var pennies = exactChange * 1;
		document.getElementById("pennies").value = pennies;
	}
	
	
	else if (exactChange >= 5 && exactChange < 10) {
	var nickels = Math.floor(exactChange/5);
	var pennies = exactChange%5;
	
	document.getElementById("nickels").value = nickels;	
	document.getElementById("pennies").value = pennies;
	}
	
	else if (exactChange >= 10 && exactChange < 15) {
	var dimes = Math.floor(exactChange/10);
	var pennies = exactChange%10;
	
	document.getElementById("dimes").value = dimes;	
	document.getElementById("pennies").value = pennies;
	
	}
	
	else if (exactChange >= 15 && exactChange < 20) {
	var dimes = Math.floor(exactChange/10);
	var nickels = Math.floor((exactChange%10)/5);
	var pennies = (exactChange%10)%5;
	
	document.getElementById("dimes").value = dimes;	
	document.getElementById("nickels").value = nickels;
	document.getElementById("pennies").value = pennies;
	
	}
	
	else if (exactChange >= 20 && exactChange < 25) {
	var dimes = Math.floor(exactChange/10);
	var pennies = exactChange%10;
	
	document.getElementById("dimes").value = dimes;	
	document.getElementById("pennies").value = pennies;
	
	}
	
	else if (exactChange >= 25 && exactChange < 30) {
	var quarters = Math.floor(exactChange/25);
	var pennies = exactChange%25;
	
	document.getElementById("quarters").value = quarters;	
	document.getElementById("pennies").value = pennies;
	
	}
	else if (exactChange >= 30 && exactChange < 35) {
    var quarters = Math.floor(exactChange/25);
	var nickels = Math.floor((exactChange%25)/5);
	var pennies = (exactChange%25)%5;
	
	document.getElementById("quarters").value = quarters;	
	document.getElementById("nickels").value = nickels;
	document.getElementById("pennies").value = pennies;
		
		
	}
	else if (exactChange >=35 && exactChange < 40) {
		var quarters = Math.floor(exactChange/25);
		var dimes = Math.floor((exactChange%25)/10);
		var pennies = ((exactChange%25)%10)%5;
		
		document.getElementById("quarters").value = quarters;	
		document.getElementById("dimes").value = dimes;
		document.getElementById("pennies").value = pennies;
		
	}
	
	else if (exactChange >= 40 && exactChange <45) {
		var quarters = Math.floor(exactChange/25);
		var dimes = Math.floor((exactChange%25)/10);
		var nickels = Math.floor(((exactChange%25)%10)/5);
		var pennies = ((exactChange%25)%10)%5;
		
		document.getElementById("quarters").value = quarters;	
		document.getElementById("dimes").value = dimes;
		document.getElementById("nickels").value = nickels;		
		document.getElementById("pennies").value = pennies;
	}
	
	else if (exactChange >= 45 && exactChange < 50) {
		var quarters = Math.floor(exactChange/25);
		var dimes = Math.floor((exactChange%25)/10);
		var pennies = (exactChange%25)%10;
		
		document.getElementById("quarters").value = quarters;	
		document.getElementById("dimes").value = dimes;
		document.getElementById("pennies").value = pennies;
		
	}
	
	else if (exactChange >= 50 && exactChange < 55) {
		var quarters = Math.floor(exactChange/25);
		var pennies = exactChange%25;
		
		document.getElementById("quarters").value = quarters;
		document.getElementById("pennies").value = pennies;
		
	}
	
	else if (exactChange >= 55 && exactChange < 60) {
		var quarters = Math.floor(exactChange/25);
		var nickels = Math.floor((exactChange%25)/5);
		var pennies = (exactChange%25)%5;
		
		document.getElementById("quarters").value = quarters;
		document.getElementById("nickels").value = nickels;
		document.getElementById("pennies").value = pennies;
		
	}
	
	else if (exactChange >= 60 && exactChange < 65) {
		var quarters = Math.floor(exactChange/25);
		var dimes = Math.floor((exactChange%25)/10);
		var pennies = (exactChange%25)%10;
		
		document.getElementById("quarters").value = quarters;
		document.getElementById("dimes").value = dimes;
		document.getElementById("pennies").value = pennies;
	}
	
	else if (exactChange >= 65 && exactChange < 70) {
		var quarters = Math.floor(exactChange/25);
		var dimes = Math.floor((exactChange%25)/10);
		var nickels = Math.floor(((exactChange%25)%10)/5);
		var pennies = ((exactChange%25)%10)%5;
		
		document.getElementById("quarters").value = quarters;
		document.getElementById("dimes").value = dimes;
		document.getElementById("nickels").value = nickels;
		document.getElementById("pennies").value = pennies;
	}
	
	else if (exactChange >= 70 && exactChange < 75) {
		var quarters = Math.floor(exactChange/25);
		var dimes = Math.floor((exactChange%25)/10);
		var pennies = (exactChange%25)%10;
		
		document.getElementById("quarters").value = quarters;
		document.getElementById("dimes").value = dimes;
		document.getElementById("pennies").value = pennies;
	}
	
	else if (exactChange >= 75 && exactChange < 80) {
		var quarters = Math.floor(exactChange/25);
		var pennies = exactChange%25;
		
		document.getElementById("quarters").value = quarters;
		document.getElementById("pennies").value = pennies;
	}
	else if (exactChange >= 80 && exactChange < 85) {
		var quarters = Math.floor(exactChange/25);
		var nickels = Math.floor((exactChange%25)/5);
		var pennies = (exactChange%25)%5;
		
		document.getElementById("quarters").value = quarters;
		document.getElementById("nickels").value = nickels;
		document.getElementById("pennies").value = pennies;
	}
	
	else if (exactChange >= 85 && exactChange < 90) {
		var quarters = Math.floor(exactChange/25);
		var dimes = Math.floor((exactChange%25)/10);
		var pennies = (exactChange%25)%10;
		
		document.getElementById("quarters").value = quarters;
		document.getElementById("dimes").value = dimes;
		document.getElementById("pennies").value = pennies;
		
	}
	
	else if (exactChange >= 90 && exactChange < 95) {
		var quarters = Math.floor(exactChange/25);
		var dimes = Math.floor((exactChange%25)/10);
		var nickels = Math.floor(((exactChange%25)%10)/5);
		var pennies = ((exactChange%25)%10)%5;
		
		document.getElementById("quarters").value = quarters;
		document.getElementById("dimes").value = dimes;
		document.getElementById("nickels").value = nickels;
		document.getElementById("pennies").value = pennies;
		
	}
	
	else if (exactChange >= 95 && exactChange <= 99) {
		var quarters = Math.floor(exactChange/25);
		var dimes = Math.floor((exactChange%25)/10);
		var pennies =(exactChange%25)%10;
		
		document.getElementById("quarters").value = quarters;
		document.getElementById("dimes").value = dimes;
		document.getElementById("pennies").value = pennies;
		
	}
	
	}
	
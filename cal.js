function cal(btn) {
	let num1 = eval(document.getElementById("num1").value);
	let num2 = eval(document.getElementById("num2").value);
	let result = document.getElementById("result");
	if(btn.name==="add"){
		result.innerHTML = num1 + num2;
	}
	else if(btn.name==="sub"){
		result.innerHTML = num1 - num2;
	}
	else if(btn.name==="mul"){
		result.innerHTML = num1*num2;
	}
	else if(btn.name==="div"){
		result.innerHTML = num1/num2;
	}
}

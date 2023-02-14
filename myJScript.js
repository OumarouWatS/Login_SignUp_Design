function showtext(){
	
		if(document.getElementById("skills").value == "9"){
				document.getElementById("otherbox").style.display = "block";
		}else{
			document.getElementById("otherbox").style.display = "none";
		}
		
	}
	
function showDetails(){
		
	
		if(document.getElementById("select_option").value == "loginbtn")
		{
			
			document.getElementById("signup_div").style.display = "none";
			document.getElementById("login_div").style.display = "block";
		}
		else if(document.getElementById("select_option").value == "signupbtn")
		{
			document.getElementById("login_div").style.display = "none";
			document.getElementById("signup_div").style.display = "block";
		}
	}

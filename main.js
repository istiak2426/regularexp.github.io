let mail = document.querySelector(".mail")
let phone = document.querySelector(".phone")
let post = document.querySelector(".post")
let pass = document.querySelector(".pass")
let validation = document.querySelector(".validation")
let alertBoxwrapper = document.querySelector(".alertBoxwrapper")

mail.addEventListener("click", checkMail)
phone.addEventListener("click", checkPhone)
post.addEventListener("click", checkPost)
pass.addEventListener("click", checkPass)

function checkMail()
{
	validation.innerHTML  =`
	<label for="email" >Email</label>
    <input type="input" class="emailInput" placeholder="Enter your e-mail here" required />
    <button class="emailbtn">Check</button>
	`
	let emailBtn = validation.querySelector(".emailbtn")
	let emailInput = validation.querySelector(".emailInput")
	emailBtn.addEventListener("click", mailCheck)
	function mailCheck ()
	{ 
		let emailInputStr = emailInput.value;
		if(emailInputStr == "")
			{
				alert("enter your email");
				return
			}
			else
			{
				console.log(emailInputStr);
			}

				let res= /^([0-9A-Z-a-z]\.?)+[^\.]@([A-Z-a-z]\.?)+[^\.]$/;
				let str = emailInputStr;
				let result = res.source;
				
				function mailValid(res, str)
				{
				if(res.exec(str))
					{
						showAlert("Email is valid",)
					}
					else{
						showAlert("Email isn't valid")
					}
				}
				mailValid(res, str);

				function showAlert(message, className)
				{
					alertBoxwrapper.innerHTML =`
					<div class= "alertBox">${message}</div>
					`
					emailInput.value = "";

					setTimeout(()=>{
					alertBoxwrapper.querySelector(".alertBox").remove();
					}, 3000)
				}
	}
}


function checkPhone()
{
	validation.innerHTML  =`
	<label for="phone" >Phone Number</label>
    <input type="input" class="phoneInput" placeholder="Enter your phone number here" required />
    <button class="phoneBtn">Check</button>
	`
	let phoneBtn = validation.querySelector(".phoneBtn")
	let phoneInput = validation.querySelector(".phoneInput")
	phoneBtn.addEventListener("click", phoneCheck)
	
	function phoneCheck()
	{ 
		let phoneInputStr = phoneInput.value;
		if(phoneInputStr == "")
			{
				alert("enter your phone number");
				return
			}
			else 
			{
		
				console.log(phoneInputStr);
			}
				let phoneRes= /^([+]88)?(88)?01[0-9]{9}$/;
				let phoneStr = phoneInputStr;
				let phoneResult = phoneRes.source;
				
				function phoneValid(phoneRes, phoneStr)
				{
					if(phoneRes.exec(phoneStr))
					{
						phoneAlert("Phone number is valid")
					}
					else{
						phoneAlert("Phone number isn't valid")
					}
				
				}
				
				phoneValid(phoneRes, phoneStr);
				
				function phoneAlert(message)
				{
					alertBoxwrapper.innerHTML =`
					<div class= "alertBox">${message}</div>
					`
					phoneInput.value = "";
					
					setTimeout(()=>
					{
						alertBoxwrapper.querySelector(".alertBox").remove();
					}, 3000)
				}
	}
}


function checkPost()
{
	validation.innerHTML  =`
	<label for="post" >Post Code</label>
    <input type="input" class="postInput" placeholder="Enter your postal code here" required />
    <button class="postBtn">Check</button>
	`
	let postBtn = validation.querySelector(".postBtn")
	let postInput = validation.querySelector(".postInput")
	postBtn.addEventListener("click", postCheck)
	function postCheck ()
	{ 
		let postInputStr = postInput.value;
		if(postInputStr == "")
			{
				alert("enter your post code number");
				return
			}
			let postRes= /^[0-9]{4}$/;
			let postStr = postInputStr;
			let postResult = postRes.source;
				
			function postValid(postRes, postStr)
			{
				if(postRes.exec(postStr))
					{
						postAlert("Post code is valid")
					}
					else{
						postAlert("Post code isn't valid")
					}
			}
			postValid(postRes, postStr);
			
			function postAlert(message)
			{
				alertBoxwrapper.innerHTML =`
				<div class= "alertBox">${message}</div>
				`
				postInput.value = "";

				setTimeout(()=>
				{
				alertBoxwrapper.querySelector(".alertBox").remove();
				}, 3000)
			}
	}
}

function checkPass()
{
	validation.innerHTML  =`
	<label for="pass" >Password</label>
    <input type="input" class="passInput" placeholder="Enter your password here" required />
    <button class="passBtn">Check</button>
	`
	let passBtn = validation.querySelector(".passBtn")
	let passInput = validation.querySelector(".passInput")
	passBtn.addEventListener("click", passCheck)
	function passCheck ()
	{ 
		let passInputStr = passInput.value;
		if(passInputStr == "")
			{
				alert("enter your password ");
				return
			}

		let passRes= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
		let passStr = passInputStr;
		let passResult = passRes.source;
		
		function passValid(passRes, passStr)
		{
			if(passRes.exec(passStr))
			{
				passAlert("Password is valid")
			}
			else
			{
				passAlert("Password isn't valid")
			}
				
		}
				
		passValid(passRes, passStr);
				
		function passAlert(message)
		{
			alertBoxwrapper.innerHTML =`
			<div class= "alertBox">${message}</div>
			`
			passInput.value = "";

			setTimeout(()=>
			{
				alertBoxwrapper.querySelector(".alertBox").remove();
			}, 3000)
		}
	}
}
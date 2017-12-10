var businessName = "Anu's Rent a Car";

var cars = 
[
	{type:"Economy",availCnt:50,price:60},
	{type:"Midsize",availCnt:30,price:80},
	{type:"Luxury",availCnt:10,price:100},
	{type:"Limo",availCnt:5,price:1000}
];	


var rental = {
	firstName: "",
	lastName: "",
	carType : ""
};

window.onload = function() {
    document.getElementById("busName").innerHTML=businessName;
	
	var dropDown = document.getElementById("carType");
	var carList;
	for (var i = 0; i < cars.length; i++){	
		carList = document.createElement("OPTION");
		carList.innerHTML = cars[i].type;
		carList.setAttribute("value",i);
		dropDown.appendChild(carList);
	}
	
};

function display_details() {	
	
	var i = document.getElementById('carType').value;
	console.log(i);
	var avail = "Cars Available: ";
	var price = "Price         : $";
	avail += cars[i].availCnt;
	price += cars[i].price + "/day";
	
	document.getElementById("message").innerHTML = avail + "<br>" + price;
	document.getElementById("message").style.display = "block";
};

function ValidateForm(){ 
	var i = document.getElementById('carType').value;
	var fName= document.getElementById("firstName").value;
	var lName= document.getElementById("lastName").value;
	var carType=cars[i].type;
	var carAvail;
	var message;
	
	carAvail= cars[i].availCnt;
	console.log("carAvail = "+carAvail);
	
	var message= "First Name: "+ fName + "<br>" + "Last Name: " + 
	              lName + "<br>" + "Car Type:" + carType;
	
		
		if ((fName=="") || (lName=="") || (carType == "")) { 
			var caution = "First Name, Last Name and Car Type Should be entered";
			document.getElementById("message").innerHTML= caution;	
			document.getElementById("message").innerHTML = carAvail + "<br>" + price;
			window.alert(caution);
		}
		else if (carAvail < 1) {
			
			document.getElementById("message").innerHTML= "The car type you have requested is not available";	
			
		}
		else {
			rental.firstName= fName;
			rental.lastName= lName;
			rental.carType= carType;
			 
			document.getElementById("message").innerHTML= "Your reservation is complete"+ "<br>"+ message;
			document.getElementById("message").style.display = "block";
			//var i = document.getElementById('carType').value;
			 
			cars[i].availCnt-=1;
		}
};


	
	
// addition

function addition(a, b) {
 
	console.log(a + b)
	return a + b;

}

// soustraction

function soustraction(a, b) {
 
	console.log(a - b )
	return a - b;
}

// miltiplication

function multiplication(a, b) {
	console.log(a * b);
	return a * b;
}


// division

function division(a, b) {

	console.log	(a / b);
	return a / b;
 
	if (b > 0) {
 	console.log(a / b);
 	}

 	else {
 	console.log("Can't divide by 0");
    }

}

var operation;
var nombre1;
var nombre2;


$("#op").on("click", function(ev){
     operation = this.value;

})

$("#egal").on("click", function(ev) {
	operation = "resultat";
	
});

$(".num").on("click", function(ev) {
    nombre1 = this.value;
    
});

$("button").on("click", function(ev) {
	var valeur = $(this).val();
	var valeur2 = $("#resultat").val();
	var resultat = valeur + valeur2;
	$("#resultat").val(resultat);
});

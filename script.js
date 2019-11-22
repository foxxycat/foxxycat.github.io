$("#certButton").on("click", function(){
	let name = $("#certName").val();
	let href = $("#hrefCert").val();
	let year = $("#yearCert").val();
	if (name, href, year != "") {
		alert("Clicked!");
	}
	else{
		alert("Поля пустые!");
	}
});
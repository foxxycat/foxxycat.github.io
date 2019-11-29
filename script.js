$("#certButton").on("click", function(){
	let name = $("#certName").val();
	let href = $("#hrefCert").val();
	let year = $("#yearCert").val();
	if (name, href, year != "") {
		var card = $('<div class="col-sm-6"><div class="card" style="width: 18rem; text-align: center;"><img src="sololearn_jq.png" class="card-img-top" alt=""><div class="card-body"><h4 class="card-title">jQuery Tutorial course</h4><p class="card-text">2019</p><a href="https://www.sololearn.com/Certificate/1082-226804/pdf/" class="btn btn-primary" target="_blank">Посмотреть</a></div></div></div>').html();
		$("eCert").append(card);
		$("input").vall("");
		alert("Done");
	}
	else{
		alert("Поля пустые!");
	}
});


$(document).ready(function(){
	
	$('#btnFindAcc').click(function(){
		var accName = $('#txtAccName').val();
		console.log("Clicked");
		console.log("Fuck");
		$.getJSON('http://localhost:8080/ShadowClient/AccountServlet?accName='+accName, function(data){
			console.log("Hej");
			console.log(data);
			var elems = [];
			$('#characterContainers').html("");
			for(var i = 0; i < data.characters.length; i++){
				var char = data.characters[i];
				var elem = new GraphicHelper().getTemplateForCharacterContainer(i);
				$('#characterContainers').append(elem);
				$('#' + i).find(".characterName").html(char.charName);
				$('#' + i).find(".characterExp").html(char.charExp);
			}
		})
	});
	
	console.log('Account');
	var gh = new GraphicHelper();
	gh.setActiveNavbar('navbarAccount');
		
});
$(document).ready(function(){
	
	$('#btnFindAcc').click(function(){
		var accName = $('#txtAccName').val();
		console.log("Clicked");
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
				$('#' + i).find(".characterCurrentHp").html(char.charCurrentHp);
				$('#' + i).find(".characterMaxHp").html(char.charMaxHp);
				$('#' + i).find(".characterBaseDmgMin").html(char.charBaseDmgMin);
				$('#' + i).find(".characterBaseDmgMax").html(char.charBaseDmgMax);
				$('#' + i).find(".characterGold").html(char.charGold);
				$('#' + i).find(".characterLevel").html(char.charLevel);
			}
		})
	});
	
	console.log('Account');
	var gh = new GraphicHelper();
	gh.setActiveNavbar('navbarAccount');
		
});
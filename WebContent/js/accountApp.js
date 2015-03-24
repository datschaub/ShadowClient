$(document).ready(function(){
	
	$('#btnFindAcc').click(function(){
		var accName = $('#txtAccName').val();
		console.log("Clicked");
		console.log("Fuck");
		$.getJSON('http://localhost:8080/ShadowClient/AccountServlet?accName='+accName, function(data){
			console.log("Hej");
			console.log(data);
		})
	});
	
	console.log('Account');
	var gh = new GraphicHelper();
	gh.setActiveNavbar('navbarAccount');
		
});
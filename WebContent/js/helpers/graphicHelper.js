function GraphicHelper(){
	return {
		setActiveNavbar: function(navbarId){
			$('.active').removeClass('active');
			$('#' + navbarId).addClass('active');
		},
		getTemplateForCharacterContainer: function(id){
			return '<div id="' + id +  '" class="characterContainer"><div><p>Character Name: <span class="characterName"></span></p></div><div><p>Exp: <span class="characterExp"></span></p></div></div';
		}
	}
}
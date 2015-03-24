function GraphicHelper(){
	return {
		setActiveNavbar: function(navbarId){
			$('.active').removeClass('active');
			$('#' + navbarId).addClass('active');
		},
		getTemplateForCharacterContainer: function(){
			return '<div class="characterContainer"><div id ="CharacterName"><p>Character Name: <span class="characterName"></span></p></div><div id="Exp"><p>Exp: <span class="characterExp"></span></p></div></div';
		}
	}
}
function GraphicHelper(){
	return {
		setActiveNavbar: function(navbarId){
			$('.active').removeClass('active');
			$('#' + navbarId).addClass('active');
		},
		getTemplateForCharacterContainer: function(id){
			return '<div id="' + id +  '" class="characterContainer"><div><p>Character Name: <span class="characterName"></span></p></div><div><p>Exp: <span class="characterExp"></span></p></div><div><p>Health Points: <span class="characterCurrentHp"></span>/<span class="characterMaxHp"></span></p></div><div><p>Damage: <span class="characterBaseDmgMin"></span>/<span class="characterBaseDmgMax"></span></p></div><div><p>Amount of Gold: <span class="characterGold"></span></p></div></div';
		}
	}
}
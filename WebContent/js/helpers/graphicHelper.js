function GraphicHelper(){
	return {
		setActiveNavbar: function(navbarId){
			$('.active').removeClass('active');
			$('#' + navbarId).addClass('active');
		},
		getTemplateForCharacterContainer: function(id){
			return '<div id="' + id +  '" class="characterContainer"><div><p><h4>Character Name: <span class="characterName"></span></p></h4></div><div><p><img src="img/exp_small.png" class="smallIcon"></img> Exp: <span class="characterExp"></span></p></div><div><p><img src="img/helath_small.png" class="smallIcon"> Health Points: <span class="characterCurrentHp"></span>/<span class="characterMaxHp"></span></p></div><div><p><img src="img/damage_small.png" class="smallIcon"> Damage: <span class="characterBaseDmgMin"></span>/<span class="characterBaseDmgMax"></span></p></div><div><p><img src="img/gold_small.png" class="smallIcon"> Amount of Gold: <span class="characterGold"></span></p></div></div';
		}
	}
}


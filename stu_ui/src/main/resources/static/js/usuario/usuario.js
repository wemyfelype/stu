var usuario = {};
(function(){
	
	this.clean = function(){
		
		$("#form-salvar-usuario input").val("");
		
	};
	
	this.popularObjeto = function(){
		
		var _usuario = UsuarioConsumer.trazer($("#form-salvar-usuario input#id").val());
		
		$.each(_usuario,function(param, val){
			$("#form-salvar-usuario input[name='"+param+"']").val(val).parent().addClass('is-focused');;
		})
		
	};
	
	this.popularTable = function(){
		
		var _listUsuarios = UsuarioConsumer.listar();
		
		var __tr = $("<tr/>");
		var __td = $("<td/>");
		var __td_NaN = $("<td/>",{"class":"mdl-data-table__cell--non-numeric"});
		
		for (let usuario of _listUsuarios) {

			var _tr = $(__tr).clone();
			var _td_id = $(__td).clone();
			var _td_nome = $(__td_NaN).clone();
			
			$(_td_id).text(usuario.id).appendTo(_tr);
			$(_td_nome).text(usuario.nome).appendTo(_tr);
			
			$("#table-usuarios tbody").append(_tr);
		}
		
	};
	
	this.popularLista = function(){
		
		var _listUsuarios = UsuarioConsumer.listar();
		$("#cards-").empty();
		
		if(_listUsuarios != null){
			for (let _usuario of _listUsuarios) {
				$("#cards-").append(usuario.getCardUsuario(_usuario));
			}
		}
		
	};
	
	this.getCardUsuario = function(_usuario){
		
		var _nomes = _usuario.nome.split(" ");
		var _nome = _nomes[0] +" "+ _nomes[_nomes.length - 1];
		
		var _div_card = $("<div/>",{"class":"mdl-cell mdl-cell--4-col demo-card-square mdl-card mdl-shadow--2dp"}).attr("id","card-usuario-"+_usuario.id);
			var _div_card_header = $("<div/>",{"class":"mdl-card__title mdl-card--expand"}).appendTo(_div_card);
				var _h2_title = $("<h2/>",{"class":"mdl-card__title-text"}).text(_nomes[0]).appendTo(_div_card_header);
		
			var _div_card_body = $("<div/>",{"class":"mdl-card__supporting-text"}).text(_nome).appendTo(_div_card);
			
			var _div_card_footer = $("<div/>",{"class":"mdl-card__actions mdl-card--border"}).appendTo(_div_card);
				var _a_delete = $("<a/>",{"class":"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect delete"}).val(_usuario.id).appendTo(_div_card_footer);
					var _i_icon_delete = $("<i/>",{"class":"material-icons"}).text("delete").appendTo(_a_delete);	
				var _a_edit = $("<a/>",{"class":"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect edit"}).val(_usuario.id).appendTo(_div_card_footer);
					var _i_icon_edit = $("<i/>",{"class":"material-icons"}).text("edit").appendTo(_a_edit);
		return _div_card;
	};
	
	this.redirect = function(path){
		window.location.href = window.location.origin + path;
	};
	
}).apply(usuario);


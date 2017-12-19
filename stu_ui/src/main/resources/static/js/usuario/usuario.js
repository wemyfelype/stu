var usuario = {};
(function(){
	
	this.trazer = function(id){
		var _usuario;
		$.ajax({
			type : "GET",
			async: false,
			url : "http://" + host_services + ":8081/usuario/"+id,
			success : function(data) {
				if (data != null){
					_usuario = data;
				}
			}
		});
		
		return _usuario;
		
	};
	
	this.listar = function(){
		var _usuario;
		$.ajax({
			type : "GET",
			async: false,
			url : "http://" + host_services + ":8081/usuario/listar",
			success : function(data) {
				if (data != null){
					_usuario = data;
				}
			}
		});
		
		return _usuario;
		
	};
	
	this.salvar = function(){
		
		var _usuario;
		
		$.ajax({
			type : "POST",
			async: false,
			url : "http://" + host_services + ":8080/usuario/salvar",
			data : JSON.stringify($("#form-salvar-usuario").serializeJSON()),
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
			beforeSend: function(){
				$("#loading").fadeIn();
	        },
			success : function(data) {
				$("#loading").fadeOut();
				if (data != null){
					_usuario = data;
//					alert('Person has been added');
				}else{
					alert('Failed adding person: ' + data.status + ', ' + data.errorMessage);
				}
			}
		}).done(function(){
		});

		return _usuario;
		
	};
	
	this.deletar = function(id){
		
		$.ajax({
			type : "DELETE",
			async: false,
			url : "http://" + host_services + ":8081/usuario/deletar/"+id,
			beforeSend: function(){
				$("#loading").fadeIn();
	        },
			success : function(data) {
				if (data != null){
					console.log(data);
				}
			}
		}).done(function(){
			$("#loading").fadeOut();			
		});
		
	};
	
	this.clean = function(){
		
		$("#form-salvar-usuario input").val("");
		
	};
	
	this.popularObjeto = function(){
		
		var _usuario = usuario.trazer($("#form-salvar-usuario input#id").val());
		
		$.each(_usuario,function(param, val){
			$("#form-salvar-usuario input[name='"+param+"']").val(val).parent().addClass('is-focused');;
		})
		
	};
	
	this.popularTable = function(){
		
		var _listUsuarios = usuario.listar();
		
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
		
		var _listUsuarios = usuario.listar();
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
	
}).apply(usuario);
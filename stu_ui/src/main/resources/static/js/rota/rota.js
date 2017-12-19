host_services = window.location.hostname;

var rota = {};
(function(){
	
	this.trazer = function(id){
		var _rota;
		$.ajax({
			type : "GET",
			async: false,
			url : "http://" + host_services + ":8083/rota/"+id,
			success : function(data) {
				if (data != null){
					_rota = data;
				}
			}
		});
		
		return _rota;
		
	};
	
	this.listar = function(){
		var _rota;
		$.ajax({
			type : "GET",
			async: false,
			url : "http://" + host_services + ":8083/rota/listar",
			success : function(data) {
				if (data != null){
					_rota = data;
				}
			}
		});
		
		return _rota;
		
	};
	
	this.salvar = function(){
		
		var _rota;
		
		$.ajax({
			type : "POST",
			async: false,
			url : "http://" + host_services + ":8083/rota/salvar",
			data : JSON.stringify($("#form-salvar-rota").serializeJSON()),
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
			beforeSend: function(){
				$("#loading").fadeIn();
	        },
			success : function(data) {
				$("#loading").fadeOut();
				if (data != null){
					_rota = data;
//					alert('Person has been added');
				}else{
					alert('Failed adding person: ' + data.status + ', ' + data.errorMessage);
				}
			}
		}).done(function(){
		});

		return _rota;
		
	};
	
	this.deletar = function(id){
		
		$.ajax({
			type : "DELETE",
			async: false,
			url : "http://" + host_services + ":8083/rota/deletar/"+id,
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
		
		$("#form-salvar-rota input").val("");
		
	};
	
	this.popularObjeto = function(){
		
		var _rota = rota.trazer($("#form-salvar-rota input#id").val());
		
		$.each(_rota,function(param, val){
			$("#form-salvar-rota input[name='"+param+"']").val(val).parent().addClass('is-focused');;
		})
		
	};
	
	this.popularTable = function(){
		
		var _listRotas = rota.listar();
		
		var __tr = $("<tr/>");
		var __td = $("<td/>");
		var __td_NaN = $("<td/>",{"class":"mdl-data-table__cell--non-numeric"});
		
		for (let rota of _listRotas) {

			var _tr = $(__tr).clone();
			var _td_id = $(__td).clone();
			var _td_nome = $(__td_NaN).clone();
			
			$(_td_id).text(rota.id).appendTo(_tr);
			$(_td_nome).text(rota.nome).appendTo(_tr);
			
			$("#table-rotas tbody").append(_tr);
		}
		
	};
	
	this.popularLista = function(){
		var _listRotas = rota.listar();
		$("#cards-").empty();
		
		if(_listRotas != null){

			for (let _rota of _listRotas) {
				$("#cards-").append(rota.getCardRota(_rota));
			}
			
		}
		
	};
	
	this.getCardRota = function(_rota){
		
		var _div_card = $("<div/>",{"class":"mdl-cell mdl-cell--4-col demo-card-square mdl-card mdl-shadow--2dp"}).attr("id","card-rota-"+_rota.id);
			var _div_card_header = $("<div/>",{"class":"mdl-card__title mdl-card--expand"}).appendTo(_div_card);
				var _h2_title = $("<h2/>",{"class":"mdl-card__title-text"}).text(_rota.nome).appendTo(_div_card_header);
		
			var _div_card_body = $("<div/>",{"class":"mdl-card__supporting-text"}).text(_rota.nome).appendTo(_div_card);
			
			var _div_card_footer = $("<div/>",{"class":"mdl-card__actions mdl-card--border"}).appendTo(_div_card);
				var _a_delete = $("<a/>",{"class":"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect delete"}).val(_rota.id).appendTo(_div_card_footer);
					var _i_icon_delete = $("<i/>",{"class":"material-icons"}).text("delete").appendTo(_a_delete);	
				var _a_edit = $("<a/>",{"class":"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect edit"}).val(_rota.id).appendTo(_div_card_footer);
					var _i_icon_edit = $("<i/>",{"class":"material-icons"}).text("edit").appendTo(_a_edit);
		return _div_card;
	};
	
}).apply(rota);
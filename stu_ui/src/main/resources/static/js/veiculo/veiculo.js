var veiculo = {};
(function(){
	
	this.trazer = function(id){
		var _veiculo;
		$.ajax({
			type : "GET",
			async: false,
			url : "http://" + host_services + ":8082/veiculo/"+id,
			success : function(data) {
				if (data != null){
					_veiculo = data;
				}
			}
		});
		
		return _veiculo;
		
	};
	
	this.listar = function(){
		var _veiculo;
		$.ajax({
			type : "GET",
			async: false,
			url : "http://" + host_services + ":8082/veiculo/listar",
			success : function(data) {
				if (data != null){
					_veiculo = data;
				}
			}
		});
		
		return _veiculo;
		
	};
	
	this.salvar = function(){
		
		var _veiculo;
		
		$.ajax({
			type : "POST",
			async: false,
			url : "http://" + host_services + ":8082/veiculo/salvar",
			data : JSON.stringify($("#form-salvar-veiculo").serializeJSON()),
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
			beforeSend: function(){
				$("#loading").fadeIn();
	        },
			success : function(data) {
				$("#loading").fadeOut();
				if (data != null){
					_veiculo = data;
//					alert('Person has been added');
				}else{
					alert('Failed adding person: ' + data.status + ', ' + data.errorMessage);
				}
			}
		}).done(function(){
		});

		return _veiculo;
		
	};
	
	this.deletar = function(id){
		
		$.ajax({
			type : "DELETE",
			async: false,
			url : "http://" + host_services + ":8082/veiculo/deletar/"+id,
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
		
		$("#form-salvar-veiculo input").val("");
		
	};
	
	this.popularObjeto = function(){
		
		var _veiculo = veiculo.trazer($("#form-salvar-veiculo input#id").val());
		
		$.each(_veiculo,function(param, val){
			$("#form-salvar-veiculo input[name='"+param+"']").val(val).parent().addClass('is-focused');;
		})
		
	};
	
	this.popularTable = function(){
		
		var _listVeiculos = veiculo.listar();
		
		var __tr = $("<tr/>");
		var __td = $("<td/>");
		var __td_NaN = $("<td/>",{"class":"mdl-data-table__cell--non-numeric"});
		
		for (let veiculo of _listVeiculos) {

			var _tr = $(__tr).clone();
			var _td_id = $(__td).clone();
			var _td_nome = $(__td_NaN).clone();
			
			$(_td_id).text(veiculo.id).appendTo(_tr);
			$(_td_nome).text(veiculo.nome).appendTo(_tr);
			
			$("#table-veiculos tbody").append(_tr);
		}
		
	};
	
	this.popularLista = function(){
		
		var _listVeiculos = veiculo.listar();
		$("#cards-").empty();
		for (let _veiculo of _listVeiculos) {
			$("#cards-").append(veiculo.getCardVeiculo(_veiculo));
		}
		
	};
	
	this.getCardVeiculo = function(_veiculo){
		
		var _div_card = $("<div/>",{"class":"mdl-cell mdl-cell--4-col demo-card-square mdl-card mdl-shadow--2dp"}).attr("id","card-veiculo-"+_veiculo.id);
			var _div_card_header = $("<div/>",{"class":"mdl-card__title mdl-card--expand"}).appendTo(_div_card);
				var _h2_title = $("<h2/>",{"class":"mdl-card__title-text"}).text(_veiculo.modelo).appendTo(_div_card_header);
		
			var _div_card_body = $("<div/>",{"class":"mdl-card__supporting-text"}).text(_veiculo.marca).appendTo(_div_card);
			
			var _div_card_footer = $("<div/>",{"class":"mdl-card__actions mdl-card--border"}).appendTo(_div_card);
				var _a_delete = $("<a/>",{"class":"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect delete"}).val(_veiculo.id).appendTo(_div_card_footer);
					var _i_icon_delete = $("<i/>",{"class":"material-icons"}).text("delete").appendTo(_a_delete);	
				var _a_edit = $("<a/>",{"class":"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect edit"}).val(_veiculo.id).appendTo(_div_card_footer);
					var _i_icon_edit = $("<i/>",{"class":"material-icons"}).text("edit").appendTo(_a_edit);
		return _div_card;
	};
	
}).apply(veiculo);
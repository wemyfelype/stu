var UsuarioConsumer = {};
(function(){
	
	this.trazer = function(id){
		var _usuario;
		$.ajax({
			type : "GET",
			async: false,
			url : host_services + "/usuario/"+id,
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
			url : host_services + "/usuario/listar",
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
			url : host_services + "/usuario/salvar",
			data : JSON.stringify($("#form-salvar-usuario").serializeJSON()),
			headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
			beforeSend: function(){
				$("#loading").fadeIn();
	        },
			success : function(data) {
				$("#loading").fadeOut();
				if (data != null){
					_usuario = data;
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
			url : host_services + "/usuario/deletar/"+id,
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
	
}).apply(UsuarioConsumer);
$(document).ready(function(){
	
	$(document).on("click","#btn-salvar", function(){			
		if(UsuarioConsumer.salvar() != null)
			usuario.redirect("/usuario/listar");
	});
			
});

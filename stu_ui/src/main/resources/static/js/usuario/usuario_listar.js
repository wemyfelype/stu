$(document).ready(function(){
	var dialog = document.querySelector('dialog');

    dialogPolyfill.registerDialog(dialog);
    
    $(document).on('click','dialog .close', function() {
    	dialog.close();
    });
    
    $(document).on('click','dialog .yes', function() {
    	dialog.close();
    	$("#loading").fadeIn();
    	var id = $('dialog #id_usuario_dialog').val();
    	UsuarioConsumer.deletar(id);
    	$("#card-usuario-"+id).remove()
	});
				
    $(document).on('click','a.delete', function() {
    	$('dialog #id_usuario_dialog').val(this.value);
    	dialog.showModal();
	});
    
    $(document).on('click','.edit', function() {
    	usuario.redirect("/usuario/"+this.value);
	});
    
    $(document).on("click","#btn-novo", function(){
    	usuario.redirect("/usuario/novo");
    });
    
    init();
});

function init(){
	usuario.popularLista();
}

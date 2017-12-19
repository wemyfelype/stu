 var host_services='104.198.227.13';
//var host_services = window.location.hostname;

$(document).ready(function(){
	
	var pathName = document.location.pathname;
		
	if(/usuario\/[\d]/.test(pathName))
		usuario.popularObjeto();
	if(/usuario\/listar/.test(pathName))
		usuario.popularLista();
	
	if(/veiculo\/[\d]/.test(pathName))
		veiculo.popularObjeto();
	if(/veiculo\/listar/.test(pathName))
		veiculo.popularLista();
	
	if(/rota\/[\d]/.test(pathName))
		rota.popularObjeto();
	if(/rota\/listar/.test(pathName))
		rota.popularLista();
	
	
	$("#loading").fadeOut();
	
});

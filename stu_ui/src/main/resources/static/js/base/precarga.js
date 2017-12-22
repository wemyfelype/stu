//var host_services='http://35.225.93.179:8080';
var host_services = "http://" + window.location.hostname + ":8080";

$(document).ready(function(){
	
	var pathName = document.location.pathname;
		
	if(/usuario\/[\d]/.test(pathName))
		//usuario.popularObjeto();
	
	if(/usuario\/listar/.test(pathName))
		/*usuario.popularLista();*/
	
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

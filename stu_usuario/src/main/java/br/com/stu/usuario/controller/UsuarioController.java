package br.com.stu.usuario.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.stu.usuario.domain.Usuario;
import br.com.stu.usuario.service.UsuarioService;

@RequestMapping("usuario")
@RestController
public class UsuarioController {
	
	@Autowired
	private UsuarioService service;
	
	@GetMapping("/{id}")
	private Usuario findById(@PathVariable("id") Long id) {
		return service.findById(id);
	}
	
	@PostMapping("/salvar")
	private Usuario save(@RequestBody Usuario usuario) {
		return service.save(usuario);
	}
	
	@GetMapping("/listar")
	private List<Usuario> findAll() {
		return service.findAll();
	}
	
	@DeleteMapping("/deletar/{id}")
	private void delete(@PathVariable("id") Long id) {
		service.delete(id);
	}
		
}

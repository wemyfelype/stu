package br.com.stu.rota.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.stu.rota.domain.Rota;
import br.com.stu.rota.service.RotaService;

@RequestMapping("rota")
@RestController
public class RotaController {
	
	@Autowired
	private RotaService service;
	
	@GetMapping("/{id}")
	private Rota findById(@PathVariable("id") Long id) {
		return service.findById(id);
	}
	
	@PostMapping("/salvar")
	private Rota save(@RequestBody Rota usuario) {
		return service.save(usuario);
	}
	
	@GetMapping("/listar")
	private List<Rota> findAll() {
		return service.findAll();
	}
		
	@DeleteMapping("/deletar/{id}")
	private void delete(@PathVariable("id") Long id) {
		service.delete(id);
	}
}

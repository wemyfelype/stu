package br.com.stu.veiculo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.stu.veiculo.domain.Veiculo;
import br.com.stu.veiculo.service.VeiculoService;

@RequestMapping("veiculo")
@RestController
public class VeiculoController {
	
	@Autowired
	private VeiculoService service;
	
	
	@GetMapping("/{id}")
	private Veiculo findById(@PathVariable("id") Long id) {
		return service.findById(id);
	}
	
	@PostMapping("/salvar")
	private Veiculo save(@RequestBody Veiculo veiculo) {
		return service.save(veiculo);
	}
	
	@GetMapping("/listar")
	private List<Veiculo> findAll() {		
		return service.findAll();
	}
	
	@DeleteMapping("/deletar/{id}")
	private void deletar(@PathVariable("id") Long id) {
		service.deletar(id);
	}
	
}

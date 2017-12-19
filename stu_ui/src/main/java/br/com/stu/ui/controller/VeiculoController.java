package br.com.stu.ui.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("veiculo")
public class VeiculoController {
	
	@GetMapping("/{id}")
	public String editar(@PathVariable("id") Long id, Model model) {
		model.addAttribute("id", id);
		return "veiculo/editar";
	}
	
	@GetMapping("/novo")
	public String novo() {
		return "veiculo/novo";
	}
	
	@GetMapping("/listar")
	public String listar() {
		return "veiculo/listar";
	}
	
}
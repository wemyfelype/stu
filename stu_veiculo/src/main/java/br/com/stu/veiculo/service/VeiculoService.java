package br.com.stu.veiculo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.stu.veiculo.domain.Veiculo;
import br.com.stu.veiculo.repository.VeiculoRepository;

@Service
public class VeiculoService {
	
	@Autowired
	VeiculoRepository repository;
	
	public Veiculo findById(Long id) {
		return repository.findById(id);
	}
	
	public List<Veiculo> findAll() {
		return repository.findAll();
	}
	
	public Veiculo save(Veiculo veiculo) {
		return repository.save(veiculo);
	}
	
	public void deletar(Long id) {
		repository.delete(id);
	}
}

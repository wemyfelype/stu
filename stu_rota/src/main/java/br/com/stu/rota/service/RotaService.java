package br.com.stu.rota.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.stu.rota.domain.Rota;
import br.com.stu.rota.repository.RotaRepository;

//@Service
public class RotaService {
	
	@Autowired
	RotaRepository repository;
	
	public Rota findById(Long id) {
		
		return repository.findById(id);
	}
	
//	public List<Rota> findAll() {
//		return repository.findAll();
//	}
//	
//	public Rota save(Rota rota) {
//		return repository.save(rota);
//	}
//	
//	public void delete(Long id) {
//		repository.delete(id);
//	}
	
	public List<Long> findUsersToRota(Long id){
		return repository.findUsersToRota(id);
	}
}

package br.com.stu.usuario.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.stu.usuario.domain.Usuario;
import br.com.stu.usuario.repository.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	UsuarioRepository repository;
	
	public Usuario findById(Long id) {
		return repository.findById(id);
	}
	
	public List<Usuario> findAll() {
		return repository.findAll();
	}
	
	public Usuario save(Usuario usuario) {
		return repository.save(usuario);
	}
	
	public void delete(Long id) {
		repository.delete(id);
	}
}

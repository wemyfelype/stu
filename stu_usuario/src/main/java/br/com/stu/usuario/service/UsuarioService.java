package br.com.stu.usuario.service;

import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.stu.usuario.domain.Usuario;
import br.com.stu.usuario.mapper.UsuarioMapper;

@Service
public class UsuarioService {
	
	@Autowired
	UsuarioMapper mapper;
	
	public Usuario findById(Long id) {
		return mapper.findById(id);
	}
	
	public List<Usuario> findAll() {
		return (List<Usuario>) mapper.selectAll();
	}
	
	public List<Usuario> findAllByRotaId(Long id) {
		return (List<Usuario>) mapper.findAllByRotaId(id);
	}
	
	public Usuario save(Usuario usuario) {
		
		if(usuario.getId() != null && StringUtils.isNotBlank(usuario.getId().toString())) {
			mapper.update(usuario);
		}else { 
			mapper.insert(usuario);
		}
		
		return usuario;
	}
	
	public void delete(Long id) {
		mapper.delete(id);
	}
	
}

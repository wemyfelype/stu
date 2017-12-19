package br.com.stu.rota.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

//@Entity
public class Rota {
	
//	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String nome;
	
//	@Transient
	private List<Long> usuarios = new ArrayList<Long>();
		
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public List<Long> getUsuarios() {
		return usuarios;
	}
	public void setUsuarios(List<Long> usuarios) {
		this.usuarios = usuarios;
	}
	
	
		
}

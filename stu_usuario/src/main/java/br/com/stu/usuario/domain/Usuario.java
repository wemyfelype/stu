package br.com.stu.usuario.domain;

import java.io.Serializable;

public class Usuario implements Serializable {
	
	private static final long serialVersionUID = -357520859602268298L;
	
	private Long id;
	private String nome;
	
	private Long idRota;
	
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
	public Long getIdRota() {
		return idRota;
	}
	public void setIdRota(Long idRota) {
		this.idRota = idRota;
	}
	
}

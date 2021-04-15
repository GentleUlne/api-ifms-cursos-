package com.ifms.dto;

import java.io.Serializable;

import com.ifms.entities.Escola;

public class EscolaDTO implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	  private Long id;
	  private String nome;
	  private String email;
	  private String endereco;
	  private String site;
	  private String diretor;
	  private String telefone;
	  public EscolaDTO() {

	}
	  


	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getEndereco() {
		return endereco;
	}



	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}



	public String getSite() {
		return site;
	}



	public void setSite(String site) {
		this.site = site;
	}



	public String getDiretor() {
		return diretor;
	}



	public void setDiretor(String diretor) {
		this.diretor = diretor;
	}



	public String getTelefone() {
		return telefone;
	}



	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}



	public EscolaDTO(Long id, String nome, String email, String endereco, String site, String diretor, String telefone) {
		super();
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.endereco = endereco;
		this.site = site;
		this.diretor = diretor;
		this.telefone = telefone;
	}

		
public EscolaDTO(Escola entity) {
	
	this.id = entity.getId();
	this.nome = entity.getNome();
}


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


public static long getSerialversionuid() {
	return serialVersionUID;
}



}

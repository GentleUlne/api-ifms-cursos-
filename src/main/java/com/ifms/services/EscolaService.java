package com.ifms.services;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.ifms.dto.EscolaDTO;
import com.ifms.entities.Escola;
import com.ifms.repositories.EscolaRepository;
import com.ifms.resources.exceptions.StandardError;
import com.ifms.services.exceptions.DataBaseException;
import com.ifms.services.exceptions.ResourceNotFoundException;


@Service
public class EscolaService {
	
	@Autowired
	EscolaRepository repository;
	@Transactional(readOnly =true)
	public List<EscolaDTO> findAll(){
		
	List<Escola> List =	repository.findAll();
		return List.stream().map(Escola -> new EscolaDTO(Escola))
				.collect(Collectors.toList());
		
	}
	@Transactional(readOnly =true)
	public EscolaDTO findById(Long id) {
	Optional<Escola> obj =	repository.findById(id);
	    
		Escola Escola  = obj.orElseThrow(()-> new ResourceNotFoundException("A Escola solicitada não foi encontrada."));
		
		return new EscolaDTO(Escola);
	}
	
	@Transactional
	public EscolaDTO insert(EscolaDTO dto) {
		Escola entity = new Escola();
		entity.setNome(dto.getNome());
		entity.setDiretor(dto.getDiretor());
		entity.setEmail(dto.getEmail());
		entity.setEndereco(dto.getEndereco());
		entity.setSite(dto.getSite());
		entity.setTelefone(dto.getTelefone());
		entity = repository.save(entity);
		return new EscolaDTO(entity); 
	}
	@Transactional
	public EscolaDTO update(long id, EscolaDTO dto) {
		try {
			Escola entity = repository.getOne(id);
			entity.setNome(dto.getNome());
			entity.setDiretor(dto.getDiretor());
			entity.setEmail(dto.getEmail());
			entity.setEndereco(dto.getEndereco());
			entity.setSite(dto.getSite());
			entity.setTelefone(dto.getTelefone());
			entity = repository.save(entity);
			return new EscolaDTO(entity); 
			
			
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("O id "
					+ "da Escola não foi encontrada");
		}
		
		
	}
	public void delete(long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Não foi possivel deletar, O id "
					+ "da Escola não foi encontrada");
		} catch (DataIntegrityViolationException e) {
			throw new DataBaseException("Não foi possivel deletar a Escola, pois a mesma está em uso");
		}
		
		
	}
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<StandardError> entityNotFound(ResourceNotFoundException e, HttpServletRequest request){
		HttpStatus status = HttpStatus.NOT_FOUND;
		StandardError error = new StandardError();
		error.setTimestamp(Instant.now());
		error.setStatus(status.value());
		error.setError("Resource not found");
		error.setMessage(e.getMessage());
		error.setPath(request.getRequestURI());
		return ResponseEntity.status(status).body(error);
	}

	
	
}

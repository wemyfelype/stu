package br.com.stu.rota.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import br.com.stu.rota.domain.Rota;

//@Repository
public interface RotaRepository { //extends JpaRepository<Rota, Long> {
	
	Rota findById(Long id);
	
	@Query("select ur.usuario_id from  public.usuario_rota ur where ur.rota_id = :id")
	List<Long> findUsersToRota(Long id);
	
}

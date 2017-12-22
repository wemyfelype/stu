package br.com.stu.usuario.mapper;

import java.util.Collection;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import br.com.stu.usuario.domain.Usuario;

@Mapper
public interface UsuarioMapper {
	
	Usuario findById(@Param("id") Long id);
	
	Collection<Usuario> findAllByRotaId(@Param("id") Long id);
	
	int insert(Usuario usuario);
	
	int update(Usuario usuario);
	
	int delete(@Param("id") Long id);
	
	@Select("select * from stu.usuario")
	Collection<Usuario> selectAll();
	
//	Collection<Usuario> search(Usuario usuario);
	
	
//	Collection<Usuario> search(@Param("nome") String nome,
//								@Param("idRota") Long idRota);
	
}

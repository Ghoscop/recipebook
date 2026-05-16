package project.recipebook.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.recipebook.Entity.Receitas;

import java.util.Optional;

public interface ReceitaRepository extends JpaRepository<Receitas, Long> {

    Optional<Receitas> findByNome (String nome);

}

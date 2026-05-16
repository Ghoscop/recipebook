package project.recipebook.Repository;

import project.recipebook.DTO.ReceitaDTO;
import project.recipebook.Entity.Receitas;

import java.util.List;

public interface ServiceRepository {
    List<Receitas> listar();

    Receitas buscarPorId(Long id);

    Receitas salvar(ReceitaDTO dto);

    void deletar(Long id);
}

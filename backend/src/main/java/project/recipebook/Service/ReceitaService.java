package project.recipebook.Service;


import org.springframework.stereotype.Service;
import project.recipebook.DTO.ReceitaDTO;
import project.recipebook.Entity.Receitas;
import project.recipebook.Exception.Erros;
import project.recipebook.Repository.ReceitaRepository;
import project.recipebook.Repository.ServiceRepository;

import java.util.List;

@Service
public class ReceitaService implements ServiceRepository {

    private final ReceitaRepository repository;

    public ReceitaService(ReceitaRepository repository) {
        this.repository = repository;
    }

    public List<Receitas> listar() {
        return repository.findAll()
                .stream()
                .sorted((a, b) -> b.getDataCadastro()
                        .compareTo(a.getDataCadastro()))
                .toList();
    }


    @Override
    public Receitas buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() ->
                        new Erros("Receita não encontrada"));
    }


    @Override
    public Receitas salvar(ReceitaDTO dto) {

        repository.findByNome(dto.getNome())
                .ifPresent(r -> {
                    throw new RuntimeException("Nome já cadastrado");
                });

        Receitas recipe = new Receitas();

        recipe.setNome(dto.getNome());
        recipe.setCategoria(dto.getCategoria());
        recipe.setTempoPreparo(dto.getTempoPreparo());
        recipe.setPorcoes(dto.getPorcoes());
        recipe.setIngredientes(dto.getIngredientes());
        recipe.setModoPreparo(dto.getModoPreparo());
        recipe.setImagemUrl(dto.getImagemUrl());

        return repository.save(recipe);
    }


    @Override
    public void deletar(Long id) {

        Receitas recipe = buscarPorId(id);

        repository.delete(recipe);
    }

}

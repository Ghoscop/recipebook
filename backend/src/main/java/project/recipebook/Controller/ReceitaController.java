package project.recipebook.Controller;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import project.recipebook.DTO.ReceitaDTO;
import project.recipebook.Entity.Receitas;
import project.recipebook.Service.ReceitaService;

import java.util.List;

@RestController
@RequestMapping("/api/receitas")
@CrossOrigin(origins = "http://localhost:4200")
public class ReceitaController {

    private final ReceitaService receitaService;

    public ReceitaController(ReceitaService receitaService) {
        this.receitaService = receitaService;
    }

    @GetMapping
    public List<Receitas> listar(){
        return receitaService.listar();
    }

    @GetMapping("/{id}")
    public Receitas buscarPorId(@PathVariable Long id) {
        return receitaService.buscarPorId(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Receitas salvar(@Valid @RequestBody ReceitaDTO dto) {
        return receitaService.salvar(dto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Long id) {
        receitaService.deletar(id);
    }
}


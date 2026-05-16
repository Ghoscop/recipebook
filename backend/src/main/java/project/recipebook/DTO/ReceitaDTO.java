package project.recipebook.DTO;

import jakarta.validation.constraints.*;
import project.recipebook.Entity.Categoria;

import java.util.List;

public class ReceitaDTO {

    @NotBlank
    @Size(min = 3)
    private String nome;

    @NotNull
    private Categoria categoria;

    @NotNull
    @Min(1)
    private Integer tempoPreparo;

    @NotNull
    @Min(1)
    private Integer porcoes;

    @NotEmpty
    private List<@NotBlank String> ingredientes;

    @NotEmpty
    private List<@NotBlank String> modoPreparo;

    private String imagemUrl;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Integer getTempoPreparo() {
        return tempoPreparo;
    }

    public void setTempoPreparo(Integer tempoPreparo) {
        this.tempoPreparo = tempoPreparo;
    }

    public Integer getPorcoes() {
        return porcoes;
    }

    public void setPorcoes(Integer porcoes) {
        this.porcoes = porcoes;
    }

    public List<String> getIngredientes() {
        return ingredientes;
    }

    public void setIngredientes(List<String> ingredientes) {
        this.ingredientes = ingredientes;
    }

    public List<String> getModoPreparo() {
        return modoPreparo;
    }

    public void setModoPreparo(List<String> modoPreparo) {
        this.modoPreparo = modoPreparo;
    }

    public String getImagemUrl() {
        return imagemUrl;
    }

    public void setImagemUrl(String imagemUrl) {
        this.imagemUrl = imagemUrl;
    }
}
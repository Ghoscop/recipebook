package project.recipebook.Entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "receitas")
public class Receitas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank
    @Size(min = 3)
    @Column(unique = true)
    private String nome;

    @Enumerated(EnumType.STRING)
    @NotNull
    private Categoria categoria;

    @Min(1)
    private Integer tempoPreparo, porcoes;

    @ElementCollection
    @CollectionTable(name = "ingredientes_receita")
    private List<String> ingredientes;

    @ElementCollection
    @CollectionTable(name = "modo_preparo_receita")
    @Size(min = 1)
    private List<@NotBlank String> modoPreparo;

    private String imagemUrl;

    private LocalDateTime dataCadastro;

    @PrePersist
    public void prePersist(){
        this.dataCadastro = LocalDateTime.now();
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public @NotBlank @Size(min = 3) String getNome() {
        return nome;
    }

    public void setNome(@NotBlank @Size(min = 3) String nome) {
        this.nome = nome;
    }

    public @NotNull Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(@NotNull Categoria categoria) {
        this.categoria = categoria;
    }

    public @Min(1) Integer getTempoPreparo() {
        return tempoPreparo;
    }

    public void setTempoPreparo(@Min(1) Integer tempoPreparo) {
        this.tempoPreparo = tempoPreparo;
    }

    public @Min(1) Integer getPorcoes() {
        return porcoes;
    }

    public void setPorcoes(@Min(1) Integer porcoes) {
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

    public LocalDateTime getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(LocalDateTime dataCadastro) {
        this.dataCadastro = dataCadastro;
    }
}

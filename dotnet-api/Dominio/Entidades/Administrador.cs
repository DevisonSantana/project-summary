using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet_api.Dominio.Entidades;

public class Administrador
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id {get;set;} = default!;

    [Required]
    [StringLength(255)]
    public string Email {get;set;} = default!;

    [StringLength(55)]
    public string Senha {get;set;} = default!;
    
    [StringLength(10)]
    public string Perfil {get;set;} = default!;
}
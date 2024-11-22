using dotnet_api.Dominio.DTOs;
using dotnet_api.Dominio.Entidades;
using dotnet_api.Dominio.Infarces;
using dotnet_api.Infraestrutura.Db;

namespace dotnet_api.Dominio.Servicos;

public class AdministradorServico : IAdministradorServico
{
    private readonly DbContexto _contexto;
    public AdministradorServico(DbContexto contexto)
    {
        _contexto = contexto;
    }
    public List<Administrador> Login(LoginDTO loginDTO)
    {
        if (_contexto.Administradores.Where(adm => adm.Email == loginDTO.Email && adm.Senha == loginDTO.Senha).Count() > 0)
        {
            
        }
    }
}
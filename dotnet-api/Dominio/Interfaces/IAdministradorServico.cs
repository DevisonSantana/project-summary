using dotnet_api.Dominio.DTOs;
using dotnet_api.Dominio.Entidades;

namespace dotnet_api.Dominio.Infarces;

public interface IAdministradorServico
{
    List<Administrador> Login(LoginDTO loginDTO);
}
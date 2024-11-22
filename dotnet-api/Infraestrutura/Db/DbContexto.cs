using dotnet_api.Dominio.Entidades;
using Microsoft.EntityFrameworkCore;

namespace dotnet_api.Infraestrutura.Db;
public class DbContexto : DbContext
{
    private readonly IConfiguration _configuracaoAppSettings;
    public DbContexto(IConfiguration configuration)
    {
        _configuracaoAppSettings = configuration;
    }
    public DbSet<Administrador> Administradores {get;set;} = default!;
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        // base.OnConfiguring(optionsBuilder);
        if(!optionsBuilder.IsConfigured)
        {
            var stringConexao = _configuracaoAppSettings.GetConnectionString("mysql")?.ToString();
            if (!string.IsNullOrEmpty(stringConexao))
            {
                optionsBuilder.UseMySql(stringConexao, ServerVersion.AutoDetect(stringConexao));
            }
        }
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Administrador>().HasData(
            new Administrador {
                Id = 1,
                Email = "administrador@teste.com",
                Senha = "1234",
                Perfil = "Adm"
            }
        );
    }
}
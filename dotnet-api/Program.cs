using dotnet_api.Dominio.DTOs;
using dotnet_api.Infraestrutura.Db;
using Microsoft.EntityFrameworkCore;

namespace dotnet_api;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        var app = builder.Build();

        // builder.Services.AddDbContext<DbContexto>(options => {
        //     options.UseMySql(builder.Configuration.GetConnectionString("mysql"),
        //     ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("mysql")));
        // });

        app.MapGet("/", () => "Hello World!");

        app.MapPost("/login", (LoginDTO loginDTO) => {
            if(loginDTO.Email == "adm@teste.com" && loginDTO.Senha =="1234")
                return Results.Ok("login com sucesso");
            else
                return Results.Unauthorized();
        });

        app.Run();
    }
}

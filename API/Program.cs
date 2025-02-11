using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddDbContext<StoreContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddCors();





var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseCors(builder => 
{
    builder.WithOrigins("https://localhost:3000")
    .AllowAnyHeader()
    .AllowAnyMethod();
});
app.MapControllers();

DbInitializer.Initialize(app);

app.Run();

using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;

namespace PredicationAPI.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }

    [HttpGet(Name = "GetShareList")]
    public async Task<ActionResult> GetShareListsAsync()
    {
        var client = new HttpClient();
        var body = "";

        var request = new HttpRequestMessage
        {
            Method = HttpMethod.Get,
            RequestUri = new Uri("https://stock.indianapi.in/stock?name=wipro"),
            Headers =
            {
                { "X-Api-Key", "sk-live-NofgdSmrXnhOnfCUsDG06z7dFY8pFiC9DlCLxiWq" },
            },
        };

        using (var response = await client.SendAsync(request))
        {
            response.EnsureSuccessStatusCode();
            body = await response.Content.ReadAsStringAsync();

        }

        return Ok(new { Success = true, body });
    }


}

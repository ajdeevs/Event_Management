
using System.Threading.Tasks;
using Hangfire;
using Microsoft.Extensions.Logging;

namespace EventReportsAPI.BackgroundJobs
{
    public class DataProcessingJob
    {
        private readonly ILogger<DataProcessingJob> _logger;

        public DataProcessingJob(ILogger<DataProcessingJob> logger)
        {
            _logger = logger;
        }

        [AutomaticRetry(Attempts = 3)]
        public async Task ProcessLargeEventData()
        {
            _logger.LogInformation("Processing large event data...");
            await Task.Delay(5000);
            _logger.LogInformation("Data processing completed!");
        }
    }
}

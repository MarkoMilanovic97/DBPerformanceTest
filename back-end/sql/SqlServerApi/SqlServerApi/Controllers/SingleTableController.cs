using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Diagnostics;

namespace SqlServerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class SingleTableController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public SingleTableController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet("countrows")]
        public int GetRowCount()
        {
            string countQuery = @"SELECT COUNT(*) AS 'RowCount' FROM [PerformanceDb].[dbo].[SingleTable]";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(sqlDataSource))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(countQuery, connection))
                {
                    reader = command.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    connection.Close();
                }
            }
            return Int32.Parse(table.Rows[0]["RowCount"].ToString());
        }

        //GET
        [HttpGet("onethousand")]
        public JsonResult GetThousand()
        {
            if(GetRowCount() < 1000)
            {
                return new JsonResult("error");
            }
            var watch = System.Diagnostics.Stopwatch.StartNew();
            string query = @"SELECT TOP 1000 * FROM [PerformanceDb].[dbo].[SingleTable]";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(sqlDataSource))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.CommandTimeout = 0;
                    reader = command.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    connection.Close();
                    watch.Stop();
                }
            }
            return new JsonResult((watch.ElapsedMilliseconds) * 0.001);
        }

        [HttpGet("tenthousand")]
        public JsonResult GetTenThousand()
        {
            if (GetRowCount() < 10000)
            {
                return new JsonResult("error");
            }
            var watch = System.Diagnostics.Stopwatch.StartNew();
            string query = @"SELECT TOP 10000 * FROM [PerformanceDb].[dbo].[SingleTable]";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(sqlDataSource))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.CommandTimeout = 0;
                    reader = command.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    connection.Close();
                    watch.Stop();
                }
            }
            return new JsonResult((watch.ElapsedMilliseconds) * 0.001);
        }

        [HttpGet("onehundredthousand")]
        public JsonResult GetOneHundredThousand()
        {
            if (GetRowCount() < 100000)
            {
                return new JsonResult("error");
            }
            var watch = System.Diagnostics.Stopwatch.StartNew();
            string query = @"SELECT TOP 100000 * FROM [PerformanceDb].[dbo].[SingleTable]";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(sqlDataSource))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.CommandTimeout = 0;
                    reader = command.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    connection.Close();
                    watch.Stop();
                }
            }
            return new JsonResult((watch.ElapsedMilliseconds) * 0.001);
        }

        [HttpGet("onemilion")]
        public JsonResult GetOneMilion()
        {
            if (GetRowCount() < 1000000)
            {
                return new JsonResult("error");
            }
            var watch = System.Diagnostics.Stopwatch.StartNew();
            string query = @"SELECT TOP 1000000 * FROM [PerformanceDb].[dbo].[SingleTable]";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(sqlDataSource))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.CommandTimeout = 0;
                    reader = command.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    connection.Close();
                    watch.Stop();
                }
            }
            return new JsonResult((watch.ElapsedMilliseconds) * 0.001);
        }

        //POST
        [HttpPost("onethousand")]
        public JsonResult PostThousand()
        {
            var watch = System.Diagnostics.Stopwatch.StartNew();
            string query = @"Declare @Id int Set @Id = 1  While @Id <= 1000 Begin INSERT INTO [PerformanceDb].[dbo].[SingleTable] (FirstName, LastName, Address, City) VALUES ('John','Horold','St15', 'London') Set @Id = @Id + 1 End";
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(sqlDataSource))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.CommandTimeout = 0;
                    reader = command.ExecuteReader();
                    reader.Close();
                    connection.Close();
                    watch.Stop();
                }
            }
            return new JsonResult((watch.ElapsedMilliseconds) * 0.001);
        }

        [HttpPost("tenthousand")]
        public JsonResult PostTenTousand()
        {
            var watch = System.Diagnostics.Stopwatch.StartNew();
            string query = @"Declare @Id int Set @Id = 1  While @Id <= 10000 Begin INSERT INTO [PerformanceDb].[dbo].[SingleTable] (FirstName, LastName, Address, City) VALUES ('John','Horold','St15', 'London') Set @Id = @Id + 1 End";
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(sqlDataSource))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.CommandTimeout = 0;
                    reader = command.ExecuteReader();
                    reader.Close();
                    connection.Close();
                    watch.Stop();
                }
            }
            return new JsonResult((watch.ElapsedMilliseconds) * 0.001);
        }

        [HttpPost("onehundredthousand")]
        public JsonResult PostOneHundredTousand()
        {
            var watch = System.Diagnostics.Stopwatch.StartNew();
            string query = @"Declare @Id int Set @Id = 1  While @Id <= 100000 Begin INSERT INTO [PerformanceDb].[dbo].[SingleTable] (FirstName, LastName, Address, City) VALUES ('John','Horold','St15', 'London') Set @Id = @Id + 1 End";
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(sqlDataSource))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.CommandTimeout = 0;
                    reader = command.ExecuteReader();
                    reader.Close();
                    connection.Close();
                    watch.Stop();
                }
            }
            return new JsonResult((watch.ElapsedMilliseconds) * 0.001);
        }

        [HttpPost("onemilion")]
        public JsonResult PostOneMilion()
        {
            var watch = System.Diagnostics.Stopwatch.StartNew();
            string query = @"Declare @Id int Set @Id = 1  While @Id <= 1000000 Begin INSERT INTO [PerformanceDb].[dbo].[SingleTable] (FirstName, LastName, Address, City) VALUES ('John','Horold','St15', 'London') Set @Id = @Id + 1 End";
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(sqlDataSource))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.CommandTimeout = 0;
                    reader = command.ExecuteReader();
                    reader.Close();
                    connection.Close();
                    watch.Stop();
                }
            }
            return new JsonResult((watch.ElapsedMilliseconds) * 0.001);
        }

        //PUT
        [HttpPut("onethousand")]
        public JsonResult PutThousand()
        {
            if (GetRowCount() < 1000)
            {
                return new JsonResult("error");
            }
            var watch = System.Diagnostics.Stopwatch.StartNew();
            string query = @"UPDATE TOP (1000) [PerformanceDb].[dbo].[SingleTable] SET Address = CONVERT(varchar(255), NEWID())";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(sqlDataSource))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.CommandTimeout = 0;
                    reader = command.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    connection.Close();
                    watch.Stop();
                }
            }
            return new JsonResult((watch.ElapsedMilliseconds) * 0.001);
        }

        [HttpPut("tenthousand")]
        public JsonResult PutTenThousand()
        {
            if (GetRowCount() < 10000)
            {
                return new JsonResult("error");
            }
            var watch = System.Diagnostics.Stopwatch.StartNew();
            string query = @"UPDATE TOP (10000) [PerformanceDb].[dbo].[SingleTable] SET Address = CONVERT(varchar(255), NEWID())";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(sqlDataSource))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.CommandTimeout = 0;
                    reader = command.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    connection.Close();
                    watch.Stop();
                }
            }
            return new JsonResult((watch.ElapsedMilliseconds) * 0.001);
        }

        [HttpPut("onehundredthousand")]
        public JsonResult PutOneHundredThousand()
        {
            if (GetRowCount() < 100000)
            {
                return new JsonResult("error");
            }
            var watch = System.Diagnostics.Stopwatch.StartNew();
            string query = @"UPDATE TOP (100000) [PerformanceDb].[dbo].[SingleTable] SET Address = CONVERT(varchar(255), NEWID())";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(sqlDataSource))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.CommandTimeout = 0;
                    reader = command.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    connection.Close();
                    watch.Stop();
                }
            }
            return new JsonResult((watch.ElapsedMilliseconds) * 0.001);
        }

        [HttpPut("onemilion")]
        public JsonResult PutOneMilion()
        {
            if (GetRowCount() < 1000000)
            {
                return new JsonResult("error");
            }
            var watch = System.Diagnostics.Stopwatch.StartNew();
            string query = @"UPDATE TOP (1000000) [PerformanceDb].[dbo].[SingleTable] SET Address = CONVERT(varchar(255), NEWID())";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(sqlDataSource))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.CommandTimeout = 0;
                    reader = command.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    connection.Close();
                    watch.Stop();
                }
            }
            return new JsonResult((watch.ElapsedMilliseconds) * 0.001);
        }

        //DELETE
        [HttpDelete("onethousand")]
        public JsonResult DeleteOneThousand()
        {
            if (GetRowCount() < 1000)
            {
                return new JsonResult("error");
            }
            var watch = System.Diagnostics.Stopwatch.StartNew();
            string query = @"DELETE TOP (1000) FROM [PerformanceDb].[dbo].[SingleTable]";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(sqlDataSource))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.CommandTimeout = 0;
                    reader = command.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    connection.Close();
                    watch.Stop();
                }
            }
            return new JsonResult((watch.ElapsedMilliseconds) * 0.001);
        }

        [HttpDelete("tenthousand")]
        public JsonResult DeleteTenThousand()
        {
            if (GetRowCount() < 10000)
            {
                return new JsonResult("error");
            }
            var watch = System.Diagnostics.Stopwatch.StartNew();
            string query = @"DELETE TOP (10000) FROM [PerformanceDb].[dbo].[SingleTable]";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(sqlDataSource))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.CommandTimeout = 0;
                    reader = command.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    connection.Close();
                    watch.Stop();
                }
            }
            return new JsonResult((watch.ElapsedMilliseconds) * 0.001);
        }

        [HttpDelete("onehundredthousand")]
        public JsonResult DeleteOneHundredThousand()
        {
            if (GetRowCount() < 100000)
            {
                return new JsonResult("error");
            }
            var watch = System.Diagnostics.Stopwatch.StartNew();
            string query = @"DELETE TOP (100000) FROM [PerformanceDb].[dbo].[SingleTable]";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(sqlDataSource))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.CommandTimeout = 0;
                    reader = command.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    connection.Close();
                    watch.Stop();
                }
            }
            return new JsonResult((watch.ElapsedMilliseconds) * 0.001);
        }

        [HttpDelete("onemilion")]
        public JsonResult DeleteOneMilion()
        {
            if (GetRowCount() < 1000000)
            {
                return new JsonResult("error");
            }
            var watch = System.Diagnostics.Stopwatch.StartNew();
            string query = @"DELETE TOP (1000000) FROM [PerformanceDb].[dbo].[SingleTable]";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(sqlDataSource))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.CommandTimeout = 0;
                    reader = command.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    connection.Close();
                    watch.Stop();
                }
            }
            return new JsonResult((watch.ElapsedMilliseconds) * 0.001);
        }
    }
}
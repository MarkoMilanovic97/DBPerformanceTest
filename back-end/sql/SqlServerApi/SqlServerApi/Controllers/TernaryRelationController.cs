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

    public class TernaryRelationController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public TernaryRelationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet("countrows")]
        public int GetRowCount()
        {
            string countQuery = @"SELECT COUNT(*) AS 'RowCount' FROM Reservations r JOIN Employee e on r.EmployeeId = e.EmployeeId  JOIN ConferenceRoom cr on r.ConferenceRoomId = cr.ConferenceRoomId JOIN ReservationTime rt on r.ReservationTimeId = rt.ReservationTimeId Where FirstName = 'John' AND Name = 'Room 3' AND Appointment = '10:30'";
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
            if (GetRowCount() < 1000)
            {
                return new JsonResult("error");
            }
            var watch = System.Diagnostics.Stopwatch.StartNew();
            string query = @"SELECT TOP 1000 ReservationsId FROM Reservations r JOIN Employee e on r.EmployeeId = e.EmployeeId  JOIN ConferenceRoom cr on r.ConferenceRoomId = cr.ConferenceRoomId JOIN ReservationTime rt on r.ReservationTimeId = rt.ReservationTimeId Where FirstName = 'John' AND Name = 'Room 3' AND Appointment = '10:30'";

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
            string query = @"SELECT TOP 10000 ReservationsId FROM Reservations r JOIN Employee e on r.EmployeeId = e.EmployeeId  JOIN ConferenceRoom cr on r.ConferenceRoomId = cr.ConferenceRoomId JOIN ReservationTime rt on r.ReservationTimeId = rt.ReservationTimeId Where FirstName = 'John' AND Name = 'Room 3' AND Appointment = '10:30'";

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
            string query = @"SELECT TOP 100000 ReservationsId FROM Reservations r JOIN Employee e on r.EmployeeId = e.EmployeeId  JOIN ConferenceRoom cr on r.ConferenceRoomId = cr.ConferenceRoomId JOIN ReservationTime rt on r.ReservationTimeId = rt.ReservationTimeId Where FirstName = 'John' AND Name = 'Room 3' AND Appointment = '10:30'";

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
            string query = @"SELECT TOP 1000000 ReservationsId FROM Reservations r JOIN Employee e on r.EmployeeId = e.EmployeeId  JOIN ConferenceRoom cr on r.ConferenceRoomId = cr.ConferenceRoomId JOIN ReservationTime rt on r.ReservationTimeId = rt.ReservationTimeId Where FirstName = 'John' AND Name = 'Room 3' AND Appointment = '10:30'";

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
            string query = @"Declare @Id int Set @Id = 1 While @Id <= 1000 Begin INSERT INTO [PerformanceDb].[dbo].[Reservations] (EmployeeId, ConferenceRoomId, ReservationTimeId) SELECT (SELECT EmployeeId FROM [PerformanceDb].[dbo].[Employee] WHERE [PerformanceDb].[dbo].[Employee].FirstName = 'John') AS EmployeeId, (SELECT ConferenceRoomId FROM [PerformanceDb].[dbo].[ConferenceRoom] WHERE [PerformanceDb].[dbo].[ConferenceRoom].Name = 'Room 3') AS ConferenceRoomId, (SELECT ReservationTimeId FROM [PerformanceDb].[dbo].[ReservationTime] WHERE [PerformanceDb].[dbo].[ReservationTime].Appointment = '10:30') AS ReservationTimeId Set @Id = @Id + 1 End";
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
            string query = @"Declare @Id int Set @Id = 1 While @Id <= 10000 Begin INSERT INTO [PerformanceDb].[dbo].[Reservations] (EmployeeId, ConferenceRoomId, ReservationTimeId) SELECT (SELECT EmployeeId FROM [PerformanceDb].[dbo].[Employee] WHERE [PerformanceDb].[dbo].[Employee].FirstName = 'John') AS EmployeeId, (SELECT ConferenceRoomId FROM [PerformanceDb].[dbo].[ConferenceRoom] WHERE [PerformanceDb].[dbo].[ConferenceRoom].Name = 'Room 3') AS ConferenceRoomId, (SELECT ReservationTimeId FROM [PerformanceDb].[dbo].[ReservationTime] WHERE [PerformanceDb].[dbo].[ReservationTime].Appointment = '10:30') AS ReservationTimeId Set @Id = @Id + 1 End";
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
            string query = @"Declare @Id int Set @Id = 1 While @Id <= 100000 Begin INSERT INTO [PerformanceDb].[dbo].[Reservations] (EmployeeId, ConferenceRoomId, ReservationTimeId) SELECT (SELECT EmployeeId FROM [PerformanceDb].[dbo].[Employee] WHERE [PerformanceDb].[dbo].[Employee].FirstName = 'John') AS EmployeeId, (SELECT ConferenceRoomId FROM [PerformanceDb].[dbo].[ConferenceRoom] WHERE [PerformanceDb].[dbo].[ConferenceRoom].Name = 'Room 3') AS ConferenceRoomId, (SELECT ReservationTimeId FROM [PerformanceDb].[dbo].[ReservationTime] WHERE [PerformanceDb].[dbo].[ReservationTime].Appointment = '10:30') AS ReservationTimeId Set @Id = @Id + 1 End";
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
            string query = @"Declare @Id int Set @Id = 1 While @Id <= 1000000 Begin INSERT INTO [PerformanceDb].[dbo].[Reservations] (EmployeeId, ConferenceRoomId, ReservationTimeId) SELECT (SELECT EmployeeId FROM [PerformanceDb].[dbo].[Employee] WHERE [PerformanceDb].[dbo].[Employee].FirstName = 'John') AS EmployeeId, (SELECT ConferenceRoomId FROM [PerformanceDb].[dbo].[ConferenceRoom] WHERE [PerformanceDb].[dbo].[ConferenceRoom].Name = 'Room 3') AS ConferenceRoomId, (SELECT ReservationTimeId FROM [PerformanceDb].[dbo].[ReservationTime] WHERE [PerformanceDb].[dbo].[ReservationTime].Appointment = '10:30') AS ReservationTimeId Set @Id = @Id + 1 End";
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
            string query = @" UPDATE TOP (1000) Reservations SET Reservations.ReservationTimeId = (SELECT ReservationTime.ReservationTimeId FROM ReservationTime WHERE Appointment = '11:30')";

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
            string query = @"UPDATE TOP (10000) Reservations SET Reservations.ReservationTimeId = (SELECT ReservationTime.ReservationTimeId FROM ReservationTime WHERE Appointment = '11:30')";

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
            string query = @" UPDATE TOP (100000) Reservations SET Reservations.ReservationTimeId = (SELECT ReservationTime.ReservationTimeId FROM ReservationTime WHERE Appointment = '11:30')";

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
            string query = @" UPDATE TOP (100000) Reservations SET Reservations.ReservationTimeId = (SELECT ReservationTime.ReservationTimeId FROM ReservationTime WHERE Appointment = '11:30')";

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
            string query = @"DELETE TOP (1000) r FROM Reservations r JOIN Employee e ON r.EmployeeId = e.EmployeeId WHERE FirstName = 'John'";

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
            string query = @"DELETE TOP (10000) r FROM Reservations r JOIN Employee e ON r.EmployeeId = e.EmployeeId WHERE FirstName = 'John'";

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
            string query = @"DELETE TOP (100000) r FROM Reservations r JOIN Employee e ON r.EmployeeId = e.EmployeeId WHERE FirstName = 'John'";

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
            string query = @"DELETE TOP (1000000) r FROM Reservations r JOIN Employee e ON r.EmployeeId = e.EmployeeId WHERE FirstName = 'John'";

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
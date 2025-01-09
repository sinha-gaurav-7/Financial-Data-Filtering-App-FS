import React, { useState, useEffect } from "react";
import axios from "axios";

// Backend API URL to fetch data
const API_URL = "http://localhost:5000/api/data"; 

const FinancialDataTable = () => {
  
  // To store the fetched data
  const [data, setData] = useState([]); 

  // To store the filters data
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    minRevenue: "",
    maxRevenue: "",
    minNetIncome: "",
    maxNetIncome: "",
  });

  // To store the sort configuration (ascending or descending)
  const [sortConfig, setSortConfig] = useState({ column: "", order: "" });

  // Function to fetch data from the backend
  const fetchData = () => {
    const params = {
      startDate: filters.startDate,
      endDate: filters.endDate,
      minRevenue: filters.minRevenue,
      maxRevenue: filters.maxRevenue,
      minNetIncome: filters.minNetIncome,
      maxNetIncome: filters.maxNetIncome,
      sortColumn: sortConfig.column,
      sortOrder: sortConfig.order,
    };

    axios
      .get(API_URL, { params })
      .then((response) => {
        setData(response.data); // Set the fetched data to the state
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData();
  }, [sortConfig]); // Fetch data when the sortConfig changes

  // Function to handle sorting of the table columns
  const handleSort = (column) => {
    const order =
      sortConfig.column === column && sortConfig.order === "asc"
        ? "desc"
        : "asc";
    setSortConfig({ column, order });
  };

  // Function to handle filter submission
  const handleFilterSubmit = () => {
    fetchData(); 
  };

  return (
    <div className="container mx-auto p-4">
      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <input
          type="date"
          onChange={(e) =>
            setFilters({ ...filters, startDate: e.target.value }) // Update the filter state with the new value
          }
          placeholder="Start Date"
          className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-green-500"
        />
        <input
          type="date"
          onChange={(e) => setFilters({ ...filters, endDate: e.target.value })} // Update the filter state with the new value
          placeholder="End Date"
          className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-green-500"
        />
        <input
          type="number"
          onChange={(e) =>
            setFilters({ ...filters, minRevenue: e.target.value }) // Update the filter state with the new value
          }
          placeholder="Min Revenue"
          className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-green-500"
        />
        <input
          type="number"
          onChange={(e) =>
            setFilters({ ...filters, maxRevenue: e.target.value }) // Update the filter state with the new value
          }
          placeholder="Max Revenue"
          className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-green-500"
        />
        <input
          type="number"
          onChange={(e) =>
            setFilters({ ...filters, minNetIncome: e.target.value }) // Update the filter state with the new value
          }
          placeholder="Min Net Income"
          className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-green-500"
        />
        <input
          type="number"
          onChange={(e) =>
            setFilters({ ...filters, maxNetIncome: e.target.value }) // Update the filter state with the new value
          }
          placeholder="Max Net Income"
          className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-green-500"
        />
        <button
          onClick={handleFilterSubmit} // Call the function to submit the filters
          className="bg-blue-theme text-white rounded-full px-6 py-2 hover:bg-blue-700 transition duration-150 opacity-1"
        >
          Apply Filters
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr>
              <th
                className="px-4 py-3 text-center text-sm font-semibold text-gray-600 border-b border-gray-200 cursor-pointer"
                onClick={() => handleSort("date")} // Call the function to sort the column
              >
                Date{" "}
                {sortConfig.column === "date" &&
                  (sortConfig.order === "asc" ? "🔼" : "🔽")}
              </th>
              <th
                className="px-4 py-3 text-center text-sm font-semibold text-gray-600 border-b border-gray-200 cursor-pointer"
                onClick={() => handleSort("revenue")} // Call the function to sort the column
              >
                Revenue{" "}
                {sortConfig.column === "revenue" &&
                  (sortConfig.order === "asc" ? "🔼" : "🔽")}
              </th>
              <th
                className="px-4 py-3 text-center text-sm font-semibold text-gray-600 border-b border-gray-200 cursor-pointer"
                onClick={() => handleSort("netIncome")} // Call the function to sort the column
              >
                Net Income{" "}
                {sortConfig.column === "netIncome" &&
                  (sortConfig.order === "asc" ? "🔼" : "🔽")}
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600 border-b border-gray-200">
                Gross Profit
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600 border-b border-gray-200">
                EPS
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600 border-b border-gray-200">
                Operating Income
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition duration-150 ease-in-out"
              >
                <td className="px-4 py-3 text-center text-sm text-gray-700 border-b border-gray-200">
                  {item.date}
                </td>
                <td className="px-4 py-3 text-center text-sm text-gray-700 border-b border-gray-200">
                  {item.revenue}
                </td>
                <td className="px-4 py-3 text-center text-sm text-gray-700 border-b border-gray-200">
                  {item.netIncome}
                </td>
                <td className="px-4 py-3 text-center text-sm text-gray-700 border-b border-gray-200">
                  {item.grossProfit}
                </td>
                <td className="px-4 py-3 text-center text-sm text-gray-700 border-b border-gray-200">
                  {item.eps}
                </td>
                <td className="px-4 py-3 text-center text-sm text-gray-700 border-b border-gray-200">
                  {item.operatingIncome}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancialDataTable;

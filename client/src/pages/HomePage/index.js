import React from "react";
import FinancialDataTable from "../../components/FinancialDataTable/index.js";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* header */}
      <header className="text-center p-4">
        <h1 className="text-2xl md:text-3xl font-bold">
          Financial Data Filtering App
        </h1>
      </header>
      {/* main content */}
      <main className="flex-grow p-4">
        <FinancialDataTable />
      </main>
      {/* footer */}
      <footer className="bg-gray-200 text-center p-4">
        <p className="text-sm md:text-base">
          © 2025 Financial Data Filtering App - Gaurav Sinha. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;

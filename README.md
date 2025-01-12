# Financial Data Filtering App

The **Financial Data Filtering App** is a responsive web application that allows users to fetch, filter, and analyze financial data for Apple Inc. The app leverages the Financial Modeling Prep API to display key financial metrics like revenue, net income, and more. Users can filter data by date, revenue, and net income ranges and sort it in ascending or descending order. The application is built using React, Python Flask, styled using TailwindCSS, and hosted using AWS.

---

## **Features**

- Fetch annual income statements for Apple Inc. from the https://site.financialmodelingprep.com/developer/docs#income-statements-financial-statements.
- Filter data by:
  - Date range
  - Revenue range
  - Net income range
- Sort data by:
  - Date (ascending/descending)
  - Revenue (ascending/descending)
  - Net income (ascending/descending)
- Responsive design for mobile, tablet, and desktop devices.

---

## **Live Demo**

The application is deployed and available at:

- http://54.172.85.140/

---

## **Technologies Used**

- **Frontend**: React, Axios, TailwindCSS
- **Backend**: Python Flask
- **API**: https://site.financialmodelingprep.com/developer/docs#income-statements-financial-statements
- **Hosting**: AWS

---

## **Setup and Running the Application**

To set up and run the application locally, follow these instructions:

1. **Clone the Repository**: Clone the repository to your local machine using the following command:
   - git clone https://github.com/sinha-gaurav-7/Financial-Data-Filtering-App.git
2. **Navigate to the Backend Folder**: The backend application is located in the server folder.
   - cd Financial-Data-Filtering-App/server
3. **Install Dependencies**: Install the required Python packages
   - pip install -r requirements.txt
4. **Set Up Environment Variables**: Add any required environment variables to the .env file in the server folder. Refer to the .env.example file for guidance.
5. **Run the Flask Application**: Start the backend server
   - python app.py
6. **Access the Backend**: The backend will be accessible at
   - http://127.0.0.1:5000/api/data
7. **Navigate to the Frontend Folder**: The frontend application is located in the client folder.
   - cd Financial-Data-Filtering-App/client
8. **Install Dependencies**: Install the required npm packages
   - npm install
9. **Run the React Application**: Start the frontend development server
   - npm start
10. **Access the Frontend**: The frontend will be accessible at
    - http://localhost:3000

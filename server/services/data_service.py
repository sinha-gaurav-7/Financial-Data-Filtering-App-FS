import requests
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Load API key from environment variables
API_KEY = os.getenv("API_KEY")

# Define API URL
API_URL = f"https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey={API_KEY}"

# Function to fetch data from the API
def fetch_data():
    try:
        response = requests.get(API_URL)
        if response.status_code == 200:
            return response.json()
        else:
            return []
    except Exception as e:
        print(f"Error fetching data: {e}")
        return []

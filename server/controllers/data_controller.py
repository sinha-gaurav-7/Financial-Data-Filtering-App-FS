from flask import jsonify
from services.data_service import fetch_data

def get_filtered_and_sorted_data(request):
    # Get query parameters
    start_date = request.args.get('startDate')
    end_date = request.args.get('endDate')
    min_revenue = request.args.get('minRevenue', type=float)
    max_revenue = request.args.get('maxRevenue', type=float)
    min_net_income = request.args.get('minNetIncome', type=float)
    max_net_income = request.args.get('maxNetIncome', type=float)
    sort_column = request.args.get('sortColumn')
    sort_order = request.args.get('sortOrder', 'asc')

    # Fetch data
    data = fetch_data()
    if not data:
        return jsonify({"error": "Failed to fetch data"}), 500

    # Filter data
    filtered_data = [
        item for item in data if
        (not start_date or item['date'] >= start_date) and
        (not end_date or item['date'] <= end_date) and
        (not min_revenue or item['revenue'] >= min_revenue) and
        (not max_revenue or item['revenue'] <= max_revenue) and
        (not min_net_income or item['netIncome'] >= min_net_income) and
        (not max_net_income or item['netIncome'] <= max_net_income)
    ]

    # Sort data
    if sort_column:
        reverse = (sort_order == 'desc')
        try:
            filtered_data.sort(key=lambda x: x[sort_column], reverse=reverse)
        except KeyError:
            return jsonify({"error": f"Invalid sort column: {sort_column}"}), 400

    return jsonify(filtered_data)

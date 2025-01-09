from flask import Blueprint, request
from controllers.data_controller import get_filtered_and_sorted_data

data_blueprint = Blueprint('data', __name__)

# Define routes
@data_blueprint.route('/data', methods=['GET'])
def data_route():
    # Call the controller function
    return get_filtered_and_sorted_data(request)

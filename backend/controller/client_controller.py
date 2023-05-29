from flask import Blueprint, jsonify
from models.Client import Client, ClientSchema

client = Blueprint('client', __name__)


# API CLIENT
@client.get("/api/client")
def get_all_client():
    try:
        clients = Client.get_all()
        serializer = ClientSchema(many=True)
        data = serializer.dump(clients)
        return jsonify(data)
    except Exception as err:
        print(err)

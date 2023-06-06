from flask import Blueprint, jsonify
from models.Client import Client, ClientSchema

client = Blueprint('client', __name__)


# API CLIENT
@client.get("/api/client/all")
def get_all_client():
    try:
        clients = Client.get_all()
        serializer = ClientSchema(many=True)
        data = serializer.dump(clients)
        return jsonify(data)
    except Exception as err:
        print(err)

@client.post("/api/client/post")
def add_client():
    try:
        clients = Client.get_all()
        serializer = ClientSchema(many=True)
        data = serializer.dump(clients)
        return jsonify(data)
    except Exception as err:
        print(err)

@client.get("/api/client/update")
def update_client():
    try:
        clients = Client.get_all()
        serializer = ClientSchema(many=True)
        data = serializer.dump(clients)
        return jsonify(data)
    except Exception as err:
        print(err)

@client.delete("/api/client/delete<id>")
def delete_client(id):
    try:
        clients = Client.delete(id)
        serializer = ClientSchema(many=True)
        data = serializer.dump(clients)
        return jsonify(data)
    except Exception as err:
        print(err)

from flask import Blueprint, jsonify, request
from models.Client import Client, ClientSchema
from flask_jwt_extended import create_access_token, unset_jwt_cookies, jwt_required

client = Blueprint('client', __name__)


@client.after_request
def add_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    return response


# API CLIENT
@client.get("/api/client/all")
@jwt_required()
def get_all_client():
    try:
        clients = Client.get_all()
        serializer = ClientSchema(many=True)
        data = serializer.dump(clients)
        return jsonify(data)
    except Exception as err:
        print(err)

@client.get("/api/client/<id>")
def get_client(id):
    try:
        user = Client.get_by_id(id)
        if isinstance(user, str):
            return "User not found", 404
        else:
            return user.toJSON(),200
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500


@client.post("/api/client/post")
def add_client():
    try:
        clients = Client.get_all()
        serializer = ClientSchema(many=True)
        data = serializer.dump(clients)
        return jsonify(data)
    except Exception as err:
        print(err)


@client.put("/api/client/update")
def update_client():
    try:
        clients = Client.get_all()
        serializer = ClientSchema(many=True)
        data = serializer.dump(clients)
        return jsonify(data)
    except Exception as err:
        print(err)


@client.delete("/api/client/delete/<id>")
def delete_client(id):
    try:
        clients = Client.delete(id)
        serializer = ClientSchema(many=True)
        data = serializer.dump(clients)
        return jsonify(data)
    except Exception as err:
        print(err)


# Control authentication

@client.post("/api/client/login")
def login():

    email = request.json.get("email", None)
    password = request.json.get("password", None)

    cliente = Client.get_by_email_password(email, password)
    if cliente:
        claims = {
            "email": cliente.email,
            "rol": cliente.rol,
            "id": cliente.id
        }
        access_token = create_access_token(identity=cliente.id,additional_claims=claims)
        response = {"access_token": access_token}

    else:
        response = {"msg": "Wrong email or password"}, 401

    return response


@client.post("/api/client/register")
def register():
    return "register"


@client.post("/api/client/logout")
@jwt_required()
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

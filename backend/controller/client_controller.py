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
@jwt_required()
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
@jwt_required()
def add_client():
    try:
        if not request.json:
            return jsonify({'message': 'Response not found'}), 400
        client = Client(
            name=request.json.get('name'),
            surname1=request.json.get('surname1'),
            surname2=request.json.get('surname2'),
            dni=request.json.get('dni'),
            email=request.json.get('email'),
            birthday=request.json.get('birthday'),
            password=request.json.get('password'),
            rol=3,
        )
        client.save()
        return jsonify(client.toJSON()), 201
    except Exception as err:
        print(err)


@client.put("/api/client/update/<id>")
@jwt_required()
def update_client(id):
    try:
        if not request.json:
            return jsonify({'message': 'Response not found'}), 400
        client = Client.get_by_id(id)
        if client is None:
            return jsonify(({'message': 'No existe cliente para actualizar'}), 404)

        client.name = request.json.get('name', client.name)
        client.surname1 = request.json.get('surname1', client.surname1)
        client.surname2 = request.json.get('surname2', client.surname2)
        client.dni = request.json.get('dni', client.dni)
        client.email = request.json.get('email', client.email)
        client.birthday = request.json.get('birthday', client.birthday)
        client.password = request.json.get('password', client.password)

        client.save()
        return jsonify(client.toJSON()),  201
    except Exception as err:
        print(err)


@client.delete("/api/client/delete/<id>")
@jwt_required()
def delete_client(id):
    try:
        client = Client.get_by_id(id)
        print(client)
        if client is None:
            return jsonify(({'message': 'No existe cliente a eliminar'}), 404)
        client.delete()
        return jsonify({'result': True})
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
            "id": cliente.id,
            "name": cliente.name,
        }
        access_token = create_access_token(identity=cliente.id,additional_claims=claims)
        response = {"access_token": access_token}

    else:
        response = {"msg": "Wrong email or password"}, 401

    return response


@client.post("/api/client/logout")
@jwt_required()
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

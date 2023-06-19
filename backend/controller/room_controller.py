from flask import Blueprint, jsonify, request
from models.Room import Room, RoomSchema
from flask_jwt_extended import jwt_required

room = Blueprint('room', __name__)


@room.after_request
def add_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    return response


# API CLIENT
@room.get("/api/room/all")
@jwt_required()
def get_all_room():
    try:
        clients = Room.get_all()
        serializer = RoomSchema(many=True)
        data = serializer.dump(clients)
        return jsonify(data)
    except Exception as err:
        print(err)

@room.get("/api/room/<id>")
@jwt_required()
def get_room(id):
    try:
        user = Room.get_by_id(id)
        if isinstance(user, str):
            return "Room not found", 404
        else:
            return user.toJSON(),200
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500


@room.post("/api/room/post")
@jwt_required()
def add_room():
    try:
        if not request.json:
            return jsonify({'message': 'Response not found'}), 400
        room = Room(
            camas=request.json.get('camas'),
            piso=request.json.get('piso'),
            tipo=request.json.get('tipo'),
            num_room=request.json.get('num_room'),
            precio=request.json.get('precio')
        )
        room.save()
        return jsonify(room.toJSON()), 201
    except Exception as err:
        print(err)


@room.put("/api/room/update/<id>")
@jwt_required()
def update_room(id):
    try:
        if not request.json:
            return jsonify({'message': 'Response not found'}), 400
        room = Room.get_by_id(id)
        if room is None:
            return jsonify(({'message': 'No existe room para actualizar'}), 404)

        room.camas = request.json.get('camas', room.camas)
        room.piso = request.json.get('piso', room.piso)
        room.tipo = request.json.get('tipo', room.tipo)
        room.num_room = request.json.get('num_room', room.num_room)
        room.precio = request.json.get('precio', room.precio)

        room.save()
        return jsonify(room.toJSON()),  201
    except Exception as err:
        print(err)


@room.delete("/api/room/delete/<id>")
@jwt_required()
def delete_room(id):
    try:
        room = Room.get_by_id(id)
        print(room)
        if room is None:
            return jsonify(({'message': 'No existe room a eliminar'}), 404)
        room.delete()
        return jsonify({'result': True})
    except Exception as err:
        print(err)

from flask import Blueprint, jsonify
from models.Room import Room, RoomSchema

room = Blueprint('room', __name__)


# API ROOM
@room.get("/api/room")
def get_all_room():
    try:
        rooms = Room.get_all()
        serializer = RoomSchema(many=True)
        data = serializer.dump(rooms)
        return jsonify(data)
    except Exception as err:
        print(err)

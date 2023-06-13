from flask import Blueprint, jsonify, request
from models.Booking import Booking, BookingSchema
from flask_jwt_extended import jwt_required

booking = Blueprint('booking', __name__)


@booking.after_request
def add_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    return response


# API CLIENT
@booking.get("/api/booking/all")
@jwt_required()
def get_all_booking():
    try:
        clients = Booking.get_all()
        serializer = BookingSchema(many=True)
        data = serializer.dump(clients)
        return jsonify(data)
    except Exception as err:
        print(err)

@booking.get("/api/booking/<id>")
@jwt_required()
def get_booking(id):
    try:
        user = Booking.get_by_id(id)
        if isinstance(user, str):
            return "Booking not found", 404
        else:
            return user.toJSON(),200
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500


@booking.post("/api/booking/post")
@jwt_required()
def add_booking():
    try:
        if not request.json:
            return jsonify({'message': 'Response not found'}), 400
        booking = Booking(
            checkout=request.json.get('checkout'),
            checkin=request.json.get('checkin'),
            id_room=request.json.get('id_room'),
            spa=request.json.get('spa'),
            dinner=request.json.get('dinner'),
            gym=request.json.get('gym'),
            lunch=request.json.get('lunch'),
            parking=request.json.get('parking'),
            breakfast=request.json.get('breakfast'),
            id_client=request.json.get('id_client')

        )
        booking.save()
        return jsonify(booking.toJSON()), 201
    except Exception as err:
        print(err)


@booking.put("/api/booking/update/<id>")
@jwt_required()
def update_room(id):
    try:
        if not request.json:
            return jsonify({'message': 'Response not found'}), 400
        booking = Booking.get_by_id(id)
        if booking is None:
            return jsonify(({'message': 'No existe booking para actualizar'}), 404)

        booking.checkout = request.json.get('checkout', booking.checkout)
        booking.checkin = request.json.get('checkin', booking.checkin)
        booking.id_room = request.json.get('id_room', booking.id_room)
        booking.spa = request.json.get('spa', booking.spa)
        booking.dinner = request.json.get('dinner', booking.dinner)
        booking.gym = request.json.get('gym', booking.gym)
        booking.lunch = request.json.get('lunch', booking.lunch)
        booking.parking = request.json.get('parking', booking.parking)
        booking.breakfast = request.json.get('breakfast', booking.breakfast)
        booking.id_client = request.json.get('id_client', booking.id_client)

        booking.save()
        return jsonify(booking.toJSON()),  201
    except Exception as err:
        print(err)


@booking.delete("/api/booking/delete/<id>")
@jwt_required()
def delete_room(id):
    try:
        booking = Booking.get_by_id(id)
        print(booking)
        if booking is None:
            return jsonify(({'message': 'No existe booking a eliminar'}), 404)
        booking.delete()
        return jsonify({'result': True})
    except Exception as err:
        print(err)

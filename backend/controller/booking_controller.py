from flask import Blueprint, jsonify
from models.Booking import Booking, BookingSchema

booking = Blueprint('booking', __name__)


# API BOOKING
@booking.get("/api/booking")
def get_all_booking():
    try:
        bookings = Booking.get_all()
        serializer = BookingSchema(many=True)
        data = serializer.dump(bookings)
        return jsonify(data)
    except Exception as err:
        print(err)

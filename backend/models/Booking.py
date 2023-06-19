from flask_sqlalchemy import SQLAlchemy
from marshmallow import Schema, fields
from config import app

db = SQLAlchemy(app)


class Booking(db.Model):
    __tablename__ = "booking"
    id = db.Column(db.Integer, primary_key=True)
    checkout = db.Column(db.DateTime, nullable=False)
    checkin = db.Column(db.DateTime, nullable=False)
    id_room = db.Column(db.Integer, db.ForeignKey('room.id'), nullable=False)
    spa = db.Column(db.Boolean, nullable=False)
    dinner = db.Column(db.Boolean, nullable=False)
    gym = db.Column(db.Boolean, nullable=False)
    lunch = db.Column(db.Boolean, nullable=False)
    parking = db.Column(db.Boolean, nullable=False)
    breakfast = db.Column(db.Boolean, nullable=False)
    id_client = db.Column(db.Integer, db.ForeignKey('client.id'), nullable=False)

    def __repr__(self):
        return str(self.checkin)

    @classmethod
    def get_all(cls):
        return cls.query.all()

    @classmethod
    def get_by_id(cls, id):
        return cls.query.filter_by(id=id).first_or_404()

    @classmethod
    def get_by_id_client(cls, id):
        #resultado = db.session.query('SELECT * FROM booking WHERE id_client = :id', {'id': id}).all()
        #return resultado
        return cls.query.filter_by(id_client=id).all()

    def save(self):
        db.session.add(self)
        db.session.commit()


    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def toJSON(self):
        return {
            "id": self.id,
            "checkout": self.checkout,
            'checkin': self.checkin,
            'id_room': self.id_room,
            "spa": self.spa,
            "dinner": self.dinner,
            "gym": self.gym,
            "lunch": self.lunch,
            "parking": self.parking,
            "breakfast": self.breakfast,
            "id_client": self.id_client,
        }


class BookingSchema(Schema):
    id = fields.Integer()
    checkout = fields.DateTime()
    checkin = fields.DateTime()
    id_room = fields.Integer()
    spa = fields.Boolean()
    dinner = fields.Boolean()
    gym = fields.Boolean()
    lunch = fields.Boolean()
    parking = fields.Boolean()
    breakfast = fields.Boolean()
    id_client = fields.Integer()

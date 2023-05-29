from flask_sqlalchemy import SQLAlchemy
from marshmallow import Schema,fields
from config import app

db = SQLAlchemy(app)

class Room(db.Model):
    __tablename__ = "room"
    id = db.Column(db.Integer, primary_key=True)
    camas = db.Column(db.Integer, nullable=False)
    vistas = db.Column(db.String(100), nullable=False)
    piso = db.Column(db.Integer, nullable=False)
    free = db.Column(db.Boolean, nullable=False)
    fotos = db.Column(db.String(100), nullable=True)
    tipo = db.Column(db.String(100), nullable=False)
    num_room = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return self.user

    @classmethod
    def get_all(cls):
        return cls.query.all()

    @classmethod
    def get_by_id(cls,id):
        return cls.query.get_or_404(id)

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def toJSON(self):
        return {
            "id": self.id,
            "camas": self.camas,
            'vistas': self.vistas,
            'piso': self.piso,
            "free": self.free,
            "fotos": self.fotos,
            "tipo": self.tipo,
            "num_room": self.num_room
        }


class RoomSchema(Schema):
    id = fields.Integer()
    camas = fields.Integer()
    vistas = fields.String()
    piso = fields.Integer()
    free = fields.Boolean()
    fotos = fields.String()
    tipo = fields.String()
    num_room = fields.Integer()
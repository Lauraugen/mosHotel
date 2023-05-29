from flask_sqlalchemy import SQLAlchemy
from marshmallow import Schema,fields
from config import app

db = SQLAlchemy(app)

class Client(db.Model):
    __tablename__ = "client"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    surname1 = db.Column(db.String(100), nullable=False)
    surname2 = db.Column(db.String(100), nullable=False)
    dni = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(100), nullable=False)
    birthday = db.Column(db.DateTime, nullable=True)
    password = db.Column(db.String(100), nullable=False)
    rol = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return self.name

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
            "name": self.name,
            'surname1': self.surname1,
            'surname2': self.surname2,
            "dni": self.dni,
            "email": self.email,
            "birthday": self.birthday
        }


class ClientSchema(Schema):
    id = fields.Integer()
    name = fields.String()
    surname1 = fields.String()
    surname2 = fields.String()
    dni = fields.String()
    email = fields.String()
    birthday = fields.DateTime()
    password = fields.String()
    rol = fields.String()
from flask_sqlalchemy import SQLAlchemy
from marshmallow import Schema, fields
from config import app

db = SQLAlchemy(app)


class Admin(db.Model):
    __tablename__ = "admin"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    rol = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return self.email

    @classmethod
    def get_all(cls):
        return cls.query.all()

    @classmethod
    def get_by_id(cls, id):
        return cls.query.filter_by(id=id).first_or_404()

    @classmethod
    def get_by_email_password(cls, email, password):
        return cls.query.filter_by(email=email, password=password).first_or_404()

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def toJSON(self):
        return {
            "id": self.id,
            "email": self.email,
            'password': self.password,
            'rol': self.rol
        }


class AdminSchema(Schema):
    id = fields.Integer()
    email = fields.String()
    password = fields.String()
    rol = fields.Integer()

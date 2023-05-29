from flask_sqlalchemy import SQLAlchemy
from marshmallow import Schema,fields
from config import app

db = SQLAlchemy(app)

class Admin(db.Model):
    __tablename__ = "admin"
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    rol = db.Column(db.String(100), nullable=False)

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
            "user": self.user,
            'password': self.password,
            'rol': self.rol
        }


class AdminSchema(Schema):
    id = fields.Integer()
    user = fields.String()
    password = fields.String()
    rol = fields.String()

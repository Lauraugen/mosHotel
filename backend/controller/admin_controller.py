from flask import Blueprint, jsonify, request
from models.Admin import Admin, AdminSchema
from flask_jwt_extended import create_access_token, unset_jwt_cookies, jwt_required

admin = Blueprint('admin', __name__)


@admin.after_request
def add_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    return response


@admin.get("/api/admin")
def get_all_admin():
    try:
        admins = Admin.get_all()
        serializer = AdminSchema(many=True)
        data = serializer.dump(admins)
        return jsonify(data), 200
    except Exception as err:
        print(err)

# Control authentication

@admin.post("/api/admin/login")
def login():

    email = request.json.get("email", None)
    password = request.json.get("password", None)

    admin = Admin.get_by_email_password(email, password)
    if admin:
        claims = {
            "email": admin.email,
            "rol": admin.rol,
            "id": admin.id
        }
        access_token = create_access_token(identity=admin.id,additional_claims=claims)
        response = {"access_token": access_token}

    else:
        response = {"msg": "Wrong email or password"}, 401

    return response


@admin.post("/api/admin/logout")
@jwt_required()
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

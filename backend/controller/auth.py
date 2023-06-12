from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token, unset_jwt_cookies
auth = Blueprint('auth', __name__)


@auth.route("/api/login")
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return {"msg": "Wrong email or password"}, 401

    access_token = create_access_token(identity=email)
    response = {"access_token": access_token}
    return response

@auth.route("/api/register")
def register():
    return "register"


@auth.route("/api/logout")
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

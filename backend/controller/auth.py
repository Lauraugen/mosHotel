from flask import Blueprint, jsonify

auth = Blueprint('auth', __name__)


@auth.route("/api/auth/login")
def login():
    return "login"


@auth.route("/api/auth/register")
def register():
    return "register"


@auth.route("/api/auth/logout")
def logout():
    return "logout"

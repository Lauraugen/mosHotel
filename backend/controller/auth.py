from flask import Blueprint, jsonify

auth = Blueprint('auth', __name__)


@auth.route("/api/auth/login")
def login():
    return "login"

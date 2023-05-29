from flask import Blueprint, jsonify
from models.Admin import Admin, AdminSchema

admin = Blueprint('admin', __name__)


@admin.get("/api/admin")
def get_all_admin():
    try:
        admins = Admin.get_all()
        serializer = AdminSchema(many=True)
        data = serializer.dump(admins)
        return jsonify(data)
    except Exception as err:
        print(err)

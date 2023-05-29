from flask_cors import CORS
from controller.admin_controller import admin
from controller.client_controller import client
from controller.booking_controller import booking
from controller.room_controller import room
from controller.employee_controller import employee
from controller.auth import auth
from config import app

CORS(app)


# ROUTES API
@app.route("/")
def hello_world():
    return "Welcome to MoshManagement!"


app.register_blueprint(admin)
app.register_blueprint(client)
app.register_blueprint(booking)
app.register_blueprint(room)
app.register_blueprint(employee)
app.register_blueprint(auth)

if __name__ == "__main__":
    app.run()

from flask import Blueprint, jsonify, request
from models.Employee import Employee, EmployeeSchema
from flask_jwt_extended import create_access_token, unset_jwt_cookies, jwt_required

employee = Blueprint('employee', __name__)


@employee.after_request
def add_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    return response


# API EMPLOYEE
@employee.get("/api/employee")
@jwt_required()
def get_all_employee():
    try:
        employees = Employee.get_all()
        serializer = EmployeeSchema(many=True)
        data = serializer.dump(employees)
        return jsonify(data), 200
    except Exception as err:
        print(err)


@employee.get("/api/employee/<id>")
@jwt_required()
def get_employee(id):
    try:
        employee = Employee.get_by_id(id)
        if isinstance(employee, str):
            return "User not found", 404
        else:
            return employee.toJSON(), 200
    except Exception as ex:
        return jsonify({'message': str(ex)}), 500


@employee.post("/api/employee/post")
@jwt_required()
def add_employee():
    try:
        if not request.json:
            return jsonify({'message': 'Response not found'}), 400
        employee = Employee(
            name=request.json.get('name'),
            surname1=request.json.get('surname1'),
            surname2=request.json.get('surname2'),
            dni=request.json.get('dni'),
            email=request.json.get('email'),
            birthday=request.json.get('birthday'),
            password=request.json.get('password'),
            rol=2,
        )
        employee.save()
        return jsonify(employee.toJSON()), 201
    except Exception as err:
        print(err)


@employee.put("/api/employee/update/<id>")
@jwt_required()
def update_employee(id):
    try:
        if not request.json:
            return jsonify({'message': 'Response not found'}), 400
        employee = Employee.get_by_id(id)
        if employee is None:
            return jsonify(({'message': 'No existe empleado para actualizar'}), 404)

        employee.name = request.json.get('name', employee.name)
        employee.surname1 = request.json.get('surname1', employee.surname1)
        employee.surname2 = request.json.get('surname2', employee.surname2)
        employee.dni = request.json.get('dni', employee.dni)
        employee.email = request.json.get('email', employee.email)
        employee.birthday = request.json.get('birthday', employee.birthday)
        employee.password = request.json.get('password', employee.password)

        employee.save()
        return jsonify(employee.toJSON()),  201
    except Exception as err:
        print(err)


@employee.delete("/api/employee/delete/<id>")
@jwt_required()
def delete_employee(id):
    try:
        employee = Employee.get_by_id(id)
        print(employee)
        if employee is None:
            return jsonify(({'message': 'No existe empleado a eliminar'}), 404)
        employee.delete()
        return jsonify({'result': True})
    except Exception as err:
        print(err)

# Control authentication

@employee.post("/api/employee/login")
def login():

    email = request.json.get("email", None)
    password = request.json.get("password", None)

    employee = Employee.get_by_email_password(email, password)
    if employee:
        claims = {
            "email": employee.email,
            "rol": employee.rol,
            "id": employee.id,
            "name": employee.name
        }
        access_token = create_access_token(identity=employee.id, additional_claims=claims)
        response = {"access_token": access_token}

    else:
        response = {"msg": "Wrong email or password"}, 401

    return response


@employee.post("/api/employee/logout")
@jwt_required()
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

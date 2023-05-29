from flask import Blueprint, jsonify, request
from models.Employee import Employee, EmployeeSchema

employee = Blueprint('employee', __name__)


# API EMPLOYEE
@employee.get("/api/employee")
def get_all_employee():
    try:
        employees = Employee.get_all()
        serializer = EmployeeSchema(many=True)
        data = serializer.dump(employees)
        return jsonify(data), 200
    except Exception as err:
        print(err)


@employee.get("/api/employee/<int:id>")
def get_id_employee(id):
    try:
        employees = Employee.get_by_id(id)
        data = employees.toJSON()
        return data
    except Exception as err:
        print(err)


@employee.post("/api/employee")
def post_employee():
    try:
        employees = Employee.get_all()
        serializer = EmployeeSchema(many=True)
        data = serializer.dump(employees)
        return jsonify(data), 200
    except Exception as err:
        print(err)
        return {'response': 'Error al registrar employee'}, 500


@employee.put("/api/employee/<int:id>")
def update_id_employee(id):
    try:
        print(request.json)
        employee_user = Employee.get_by_id(id)
        name = request.json['name']
        surname1 = request.json['surname1']
        surname2 = request.json['surname2']
        dni = request.json['dni']
        email = request.json['email']
        birthday = request.json['birthday']
        ocupation = request.json['ocupation']
        free = request.json['free']

        photo = request.json['photo']

    except Exception as err:
        print(err)
        return {'response': 'Error al actualizar employee'}, 500


@employee.delete("/api/employee/<int:id>")
def delete_id_employee(id):
    try:
        employee_user = Employee.get_by_id(id)
        Employee.delete(employee_user)
        data = f'Usuario {id} eliminado'
        return jsonify(data), 200
    except Exception as err:
        print(err)
        return {'response': 'Error al eliminar employee'}, 500

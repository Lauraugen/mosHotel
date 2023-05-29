from flask import Flask

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://admin:admin@localhost:5432/MoshDB'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
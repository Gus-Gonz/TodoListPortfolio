from flask import  Flask
from flask_restful import Api
from app.resources import Handling_task_list

app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///'
# db = Handling_task_list()
#db.add_task({"task":"Do my home work"})
api = Api(app)


    #-------------------------------RESOURCES---------------------------------#

api.add_resource(Handling_task_list,'/' )
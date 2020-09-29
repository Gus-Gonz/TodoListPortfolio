from flask import  Flask,render_template
from flask_restful import Api
from app.resources import Handling_task_list

app = Flask(__name__,
            static_folder='static/',
            template_folder='templates/')
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///'
# db = Handling_task_list()
#db.add_task({"task":"Do my home work"})
api = Api(app)git a

    #----------------------------RENDER_TEMPLATE------------------------------#

@app.route('/', methods = ["GET"])
def main_site ():
    return render_template('index.html')


    #-------------------------------RESOURCES---------------------------------#

api.add_resource(Handling_task_list,'/task' )
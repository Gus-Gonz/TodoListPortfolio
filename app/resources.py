from flask_restful import Resource,reqparse
from app.task import db


class Handling_task_list (Resource):

    def get (self):
        return db.get_all_task() # Array with obj inside [{}]

    def post (self):
        parser = reqparse.RequestParser()
        parser.add_argument('task', required=True, help='This file cannot be left blank!')
        #print(parser.parse_args())
        task_info = parser.parse_args()
        db.add_task(task_info)

        return {"message":"New task added"}, 201

    def put (self):
        pass

    def delete (self):
        parser = reqparse.RequestParser()
        parser.add_argument('id', required=True, help='This file cannot be left blank!')
        task_id = parser.parse_args()['id']
        if db.find_by_id(task_id):
            db.delete_task(task_id)
            return {'message': 'Task deleted'}

        return {'message': 'Task not found.'}, 404
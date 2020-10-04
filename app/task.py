import sqlite3

class Db_sqlite ():

    def create_table(self):
        connection = sqlite3.connect("data.db")
        cursor = connection.cursor()

        # create_table = "CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, username text, password text )"
        # cursor.execute(create_table)

        create_table = "CREATE TABLE IF NOT EXISTS task (id INTEGER PRIMARY KEY, task TEXT )"  # Agregar owner text y completed INT
        cursor.execute(create_table)
        connection.commit()
        connection.close()

    def find_by_id  (self,_id) :
        connection = sqlite3.connect("data.db")
        cursor = connection.cursor()
        query = "SELECT * FROM task WHERE id=?"  #
        result = cursor.execute(query, (_id,))
        connection.close()

        if result :
            return True
        return  False


    def get_all_task (self):
        connection = sqlite3.connect("data.db")
        cursor = connection.cursor()
        query = "SELECT * FROM task" # WHERE name=?
        result = cursor.execute(query)

        tasks= []

        for row in result :
            tasks.append({"id": row[0],
                          "task" : row [1]})

        return tasks

    def add_task (self,task_info) : # task_info == {}
        connection = sqlite3.connect("data.db")
        cursor = connection.cursor()
        query = "INSERT INTO task(task) VALUES (?)"
        cursor.execute(query,(task_info['task'],))

        new_query = "SELECT * FROM task WHERE task=?"
        result = cursor.execute(new_query,(task_info['task'],))
        connection.commit()

        for row in result:
            connection.close()
            return {"message": "New task added", "id": str(row[0])}

    def modify_task (self,task_id,new_task):
        connection = sqlite3.connect("data.db")
        cursor = connection.cursor()
        query = "UPDATE task SET task=? WHERE id=?"
        cursor.execute(query, (new_task,task_id))
        connection.commit()
        connection.close()


    def delete_task(self, task_id):
        connection = sqlite3.connect("data.db")
        cursor = connection.cursor()
        query = "DELETE FROM task WHERE id=? "
        cursor.execute(query, (task_id,))
        print(task_id)
        connection.commit()
        connection.close()


db = Db_sqlite()

# class TaskModel (db.Model):
#     __tablename__ = 'Tasks'
#
#     id = db.Column(db.Integer, primary_key = True)
#     owner = db.Column (db.String(200))
#     task = db.Column (db.String(200))
#     completed = db.Column (db.Integer)




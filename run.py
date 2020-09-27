from app.task import db
from app.app import app

if __name__ ==  '__main__' :
    db.create_table()
    app.run(debug=True)

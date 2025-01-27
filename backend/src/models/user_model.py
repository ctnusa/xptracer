# Base = declarative_base()
from db import db
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

# Define base class for declarative models
Base = db.Model


class UserModel(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String, unique=True, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    firstname = Column(String, nullable=False)
    lastname = Column(String, nullable=False)

    def __repr__(self):
        return f"<User {self.username}>"

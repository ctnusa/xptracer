from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, required=True)
    password = Column(String, required=True)
    first_name = Column(String, required=True)
    last_name = Column(String, required=True)
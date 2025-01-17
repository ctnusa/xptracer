from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __table__ = 'user'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    last_name = Column(String)
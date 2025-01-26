import os

from .config import Config


class DevConfig(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = f"postgresql://{os.getenv("DB_USERNAME")}:{
        os.getenv("DB_PASSWORD")}@localhost/mydatabase"
    # SQLALCHEMY_DATABASE_URI = 'sqlite:///dev.db'

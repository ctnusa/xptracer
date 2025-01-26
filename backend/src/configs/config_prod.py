from .config import Config


class ProdConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'sqlite:///prod.db'

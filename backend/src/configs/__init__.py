from .config_dev import DevConfig
from .config_prod import ProdConfig
from .config_test import TestConfig

app_config = {
    "dev": DevConfig,
    "test": TestConfig,
    "prod": ProdConfig
}
import os

from src import create_app

if __name__ == "__main__":
    app = create_app(os.getenv("XPTRACER_ENV", "dev"))
    app.run(debug=True)
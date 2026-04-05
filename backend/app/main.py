from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.db.database import Base, engine
from app.routes import user_routes, record_routes, dashboard_routes

# IMPORTANT: app yahi define hona chahiye
app = FastAPI()

# Create DB tables
Base.metadata.create_all(bind=engine)

# CORS (frontend connect ke liye)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes include karo
app.include_router(user_routes.router, prefix="/users")
app.include_router(record_routes.router, prefix="/records")
app.include_router(dashboard_routes.router, prefix="/dashboard")


# Test route (optional but useful)
@app.get("/")
def home():
    return {"message": "Backend is running 🚀"}
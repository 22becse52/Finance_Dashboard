from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.database import SessionLocal
from app.models.record import Record

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/")
def get_records(db: Session = Depends(get_db)):
    return db.query(Record).all()

@router.post("/")
def create_record(data: dict, db: Session = Depends(get_db)):
    record = Record(**data)
    db.add(record)
    db.commit()
    db.refresh(record)
    return record

@router.put("/{id}")
def update_record(id: int, data: dict, db: Session = Depends(get_db)):
    record = db.query(Record).get(id)
    for key, value in data.items():
        setattr(record, key, value)
    db.commit()
    return record

@router.delete("/{id}")
def delete_record(id: int, db: Session = Depends(get_db)):
    record = db.query(Record).get(id)
    db.delete(record)
    db.commit()
    return {"message": "Deleted"}
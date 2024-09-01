from sqlalchemy import Column, ForeignKey, Integer, Text
from sqlalchemy.orm import relationship
from .base import Base


class Page(Base):
    __tablename__ = 'Pages'

    id = Column(Integer, primary_key=True)
    url = Column(Text, unique=True, sqlite_on_conflict_unique='IGNORE')
    html = Column(Text)
    web_id = Column(Integer, ForeignKey('Webs.id'))
    date_id = Column(Integer, ForeignKey('Dates.id'))
    interest = Column(Integer)
    error = Column(Integer)

    date_r = relationship('Date', backref='date_r')
    web_r = relationship('Web', backref='web_r')

    def __init__(self, url, html=None,
                 web_id=None, date_id=None,
                 interest=None, error=None,
                 date_r=None, web_r=None):
        self.url = url
        self.html = html
        self.web_id = web_id
        self.date_id = date_id
        self.interest = interest
        self.error = error
        self.date_r = date_r
        self.web_r = web_r

    def __repr__(self):
        return f"<Pages url={self.url}>"

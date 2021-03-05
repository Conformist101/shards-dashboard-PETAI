FROM python:3.7-slim-buster
LABEL maintainer="aninda & shubham"

RUN apt-get update && apt-get install -y python3-dev build-essential
RUN apt-get install ffmpeg libsm6 libxext6  -y

WORKDIR /app/src

COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY . .

EXPOSE 1000

CMD ["uvicorn", "--host", "0.0.0.0", "--port", "1000", "app:app"]
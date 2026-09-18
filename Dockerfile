FROM python:3.12-slim

WORKDIR /site
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
ENV DISABLE_MKDOCS_2_WARNING=true
RUN mkdocs build --strict

EXPOSE 8080
CMD ["python", "-m", "http.server", "8080", "--directory", "site"]

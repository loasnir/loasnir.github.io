FROM ruby:2.6-buster

WORKDIR /app

RUN gem install bundler:2.1.4

EXPOSE 4000
EXPOSE 35729

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
COPY entrypoint.sh /app/entrypoint.sh

ENTRYPOINT [ "/app/entrypoint.sh" ]

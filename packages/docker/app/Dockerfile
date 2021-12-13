FROM ruby:2.6-buster

WORKDIR /app

RUN gem install bundler:2.1.4

EXPOSE 4000
EXPOSE 35729

COPY ./packages/app/Gemfile /app/Gemfile
COPY ./packages/app/Gemfile.lock /app/Gemfile.lock
COPY ./packages/docker/app/entrypoint.sh /tmp/entrypoint.sh

ENTRYPOINT [ "/tmp/entrypoint.sh" ]

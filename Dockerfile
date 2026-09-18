FROM ruby:3.3-slim

ARG MDBOOK_VERSION=0.5.4
WORKDIR /site

RUN apt-get update \
  && apt-get install -y --no-install-recommends curl ca-certificates python3 \
  && rm -rf /var/lib/apt/lists/* \
  && curl -sSL "https://github.com/rust-lang/mdBook/releases/download/v${MDBOOK_VERSION}/mdbook-v${MDBOOK_VERSION}-x86_64-unknown-linux-musl.tar.gz" \
    | tar -xz -C /usr/local/bin

COPY . .
RUN ./bin/build

EXPOSE 8080
CMD ["python3", "-m", "http.server", "8080", "--directory", "book"]

VERSION := $(shell cat VERSION)
PUBLISHEDIMAGE := $(shell cat PUBLISHED)

build-base:
	docker build -f Dockerfile.base --build-arg "NPM_AUTH_TOKEN=${NPM_AUTH_TOKEN}" -t informatievlaanderen/rest-api-guidelines-base:${VERSION} .

# first build-base should have been run
build:
	docker build -f Dockerfile.build --build-arg "VERSION=${VERSION}" -t informatievlaanderen/rest-api-guidelines:${VERSION} .

build-base-linux:
	docker build --platform=linux/amd64 -f Dockerfile.base --build-arg "NPM_AUTH_TOKEN=${NPM_AUTH_TOKEN}" -t informatievlaanderen/rest-api-guidelines-base:${VERSION} .

# first build-base should have been run
build-linux:
	docker build --platform=linux/amd64 -f Dockerfile.build --build-arg "VERSION=${VERSION}" -t informatievlaanderen/rest-api-guidelines:${VERSION} .

run:
	docker run -d --rm --name rest-api-guidelines -p 3000:3000 informatievlaanderen/rest-api-guidelines:${VERSION}

stop:
	docker stop rest-api-guidelines

publish:
	docker tag informatievlaanderen/rest-api-guidelines:${VERSION} ${PUBLISHEDIMAGE}:${VERSION}
	docker push ${PUBLISHEDIMAGE}:${VERSION}

VERSION := $(shell cat VERSION)
PUBLISHEDIMAGE := $(shell cat PUBLISHED)

build-base:
	docker build -f Dockerfile.base --build-arg "NPM_TOKEN=${NPM_TOKEN}" -t informatievlaanderen/iv-rest-api-richtlijnen-base:${VERSION} .

# first build-base should have been run
build:
	docker build -f Dockerfile.build --build-arg "VERSION=${VERSION}" -t informatievlaanderen/iv-rest-api-richtlijnen:${VERSION} .

build-base-linux:
	docker build --platform=linux/amd64 -f Dockerfile.base --build-arg "NPM_TOKEN=${NPM_TOKEN}" -t informatievlaanderen/iv-rest-api-richtlijnen-base:${VERSION} .

# first build-base should have been run
build-linux:
	docker build --platform=linux/amd64 -f Dockerfile.build --build-arg "VERSION=${VERSION}" -t informatievlaanderen/iv-rest-api-richtlijnen:${VERSION} .

run:
	docker run -d --rm --name iv-rest-api-richtlijnen -p 3000:3000 informatievlaanderen/iv-rest-api-richtlijnen:${VERSION}

stop:
	docker stop iv-rest-api-richtlijnen

publish:
	docker tag informatievlaanderen/iv-rest-api-richtlijnen:${VERSION} ${PUBLISHEDIMAGE}:${VERSION}
	docker push ${PUBLISHEDIMAGE}:${VERSION}

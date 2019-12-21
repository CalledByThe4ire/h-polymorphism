install: install-deps

run:
	npx babel-node 'src/bin/hexlet.js' 10

install-deps:
	npm install

build:
	rm -rf dist
	npm run build

test:
	npm test

test-watch:
	npm run test -- --watch

lint:
	npx eslint . --fix

publish:
	npm publish

.PHONY: test

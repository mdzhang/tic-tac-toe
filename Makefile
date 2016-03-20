GULP = ./node_modules/.bin/gulp

build: clean gulp

gulp:
	${GULP}

clean:
	rm -rf public/build

open:
	make build & python -m SimpleHTTPServer 8000 & open http://localhost:8000/public/build/

.PHONY: build gulp clean open
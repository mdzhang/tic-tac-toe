GULP = ./node_modules/.bin/gulp

build: clean gulp

gulp:
	${GULP}

clean:
	rm -rf public/build

open:
	open index.html

.PHONY: build gulp clean open
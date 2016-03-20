GULP = ./node_modules/.bin/gulp

build: clean gulp

gulp:
	${GULP}

clean:
	rm -f styles/main.css

open:
	open index.html

.PHONY: build gulp clean open
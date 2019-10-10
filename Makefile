SHELL := /bin/bash

CMD=yarn
CMDTEST=$(CMD) run test
CMDBUILD=$(CMD) run build

PREFIX=REACT_APP_ADMINLTE_REACT

default: start

.PHONY: start
start:
	$(CMD) run start

.PHONY: build
build:
	APP_PREFIX=$(PREFIX) $(CMDBUILD)

.PHONY: test
test:
	APP_PREFIX=$(PREFIX) $(CMDTEST)

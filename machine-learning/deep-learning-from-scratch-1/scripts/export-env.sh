#!/usr/bin/env bash
set -e

conda env export --from-history | grep -v "^prefix:" > environment.yml
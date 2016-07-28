#!/bin/bash

# package for chrome web store
cd ..
rm -f gre-words-extension.zip
zip -r gre-words-extension.zip gre-words-extension -x \*.git\* *screenshots* *utils* *zip.sh*

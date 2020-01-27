build-dev:
	virtualenv-3.7 .
	bin/pip install -I -r requirements.txt
	bin/buildout


grunt-dev:
	npm init
	npm install grunt
	npm install autoprefixer
	npm install grunt-browser-sync grunt-contrib-watch grunt-contrib-less grunt-postcss grunt-contrib-cssmin
	npm install grunt-contrib-uglify
	grunt compile
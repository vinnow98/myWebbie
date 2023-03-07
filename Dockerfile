FROM alpine:latest

# Install Apache HTTP Server
RUN apk update && apk add --no-cache apache2

# Copy the website files into the container
COPY . /var/www/localhost/htdocs/

# Configure Apache HTTP Server
RUN sed -i 's/#LoadModule rewrite_module/LoadModule rewrite_module/' /etc/apache2/httpd.conf
RUN sed -i 's#DocumentRoot "/var/www/localhost/htdocs"#DocumentRoot "/var/www/localhost/htdocs"\n<Directory "/var/www/localhost/htdocs">\n    AllowOverride All\n</Directory>#' /etc/apache2/httpd.conf

# Expose port 80 to the outside world
EXPOSE 80

# Start the Apache HTTP Server in the foreground when the container starts
CMD ["httpd", "-DFOREGROUND"]

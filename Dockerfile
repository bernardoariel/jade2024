FROM php:8.2.0-apache

# Actualizar paquetes e instalar herramientas y extensiones PHP necesarias
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    && docker-php-ext-install pdo pdo_mysql zip

# Habilitar mod_rewrite para Apache
RUN a2enmod rewrite

# Copiar el código de la aplicación y definir el directorio de trabajo
COPY . /var/www/html
WORKDIR /var/www/html

# Configurar el punto de entrada para el contenedor
CMD ["apache2-foreground"]

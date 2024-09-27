FROM php:8.1-apache

# ติดตั้ง ODBC Driver ที่จำเป็นสำหรับ SQL Server
RUN apt-get update && apt-get install -y \
    unixodbc \
    unixodbc-dev \
    curl \
    apt-transport-https \
    gnupg2

# ดาวน์โหลดและติดตั้ง Microsoft ODBC Driver
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - && \
    curl https://packages.microsoft.com/config/debian/10/prod.list > /etc/apt/sources.list.d/mssql-release.list && \
    apt-get update && ACCEPT_EULA=Y apt-get install -y msodbcsql17

# ติดตั้ง PHP extensions ที่ต้องใช้
RUN pecl install sqlsrv pdo_sqlsrv && docker-php-ext-enable sqlsrv pdo_sqlsrv

# ติดตั้งไลบรารีที่จำเป็น
RUN apt-get install -y libpq-dev unixodbc-dev

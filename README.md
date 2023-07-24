# Celloscope_eCommerce_task

### Project run instructions

First clone the repository in local. After that, create the database in postgresql. Then before run the project please add the environment variables
`# NODE_ENV = development
PORT
POSTGRESQL_DB_URI`
set the POSTGRESQL database connection link

> postgres://UserName:Password@Hostname:5432/DatabaseName

then run `npm run start` to start the server normally or run with command `npm run dev` to start the server as development.
.

### Project details.

1. Home Page
2. Product details page
3. Create product Page
4. Edit product page
5. Add SUpplier page
6. Add Category page

### features added

1. Server side data validation
2. validation from frondend
3. For style used CSS and Bootstrap.
4. Used Sequelize ORM to interact with database.

### Technology used.

1. Nodejs
2. Postgresql
3. for template engine EJS
4. for server side validation 'express validator'

### endpoints

1. /home -> to view all products
2. /product/create -> to create
3. /product/update -> to update the product
4. /product/details/id -> to view the product details
5. /product/delete/id -> to delete the product
6. /suppliser/add_supplier -> to add suppliers
7. /category/add_category -> to add category


# Celloscope_eCommerce_task

### Project run instructions

First clone the repository in local. After that, create the database in PostgreSQL. Then, before running the project, please add the following environment variables:
- `NODE_ENV = development`
- `PORT`
- `POSTGRESQL_DB_URI`
Set the `POSTGRESQL_DB_URI` to the PostgreSQL database connection link: __postgres://UserName:Password@Hostname:5432/DatabaseName__


Then, run `npm run start` to start the server normally, or run with the command `npm run dev` to start the server in development mode.

### Project details

1. Home Page
2. Product Details Page
3. Create Product Page
4. Edit Product Page
5. Add Supplier Page
6. Add Category Page

### Features added

1. Server-side data validation
2. Frontend validation
3. Styling using CSS and Bootstrap
4. Responsive design
5. Used Sequelize ORM to interact with the database

### Technology used

1. Node.js
2. PostgreSQL
3. EJS (for the template engine)
4. Express Validator (for server-side validation)

### Endpoints

1. `/home` -> View all products
2. `/product/create` -> Create a new product
3. `/product/update` -> Update a product
4. `/product/details/:id` -> View product details
5. `/product/delete/:id` -> Delete a product
6. `/supplier/add_supplier` -> Add suppliers
7. `/category/add_category` -> Add categories

### Project snippets

- Home page
![Image](./project/1.png)

- Product details page
![Image](./project/2.png)

- Update product page
![Image](./project/3.png)

- Delete product action
![Image](./project/4.png)

- Product create page
![Image](./project/5.png)

- Add Supplier and Category features
![Image](./project/6.png)

- Add Supplier page
![Image](./project/7.png)

- Add Category page
![Image](./project/8.png)

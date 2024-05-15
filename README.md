# A stock manager app!
A stock app to manage the input and output of products in a stock.
## What was used to build this project?
- Express
- MongoDB
- Mongoose
- MVC Design
- Javascript
- Docker
- Docker Compose
- AWS EC2
- CSS
- HTML
## Why Mongo?
Decided to learn how to use a nosql database, MongoDB was my choice.
## Docker on the project.
Learning Docker was really an helping hand, by isolating the environment the development was easier, and made DB use easier, since there is no need of external services.
## Why CSS now?
Beside not liking CSS that much i am the kind of person which likes to have a solid base on things i do, making a better usage of CSS is an lesson, you need to face things you do not like sometimes, and for my objective of becoming a fullstack developer in the future, the CSS learning is crucial.
## The deploy on AWS.
My first experience with deployments, for sure is a cool experience making your application available for web, and this was for me the very first step on cloud computing
## Why AWS?
AWS is for sure the biggest CC service available, so i decided to learn a bit of it first, i want to get a deep dive on it to lear how the main services works, for sure i want to learn about more providers like Azure in the near future.
## What i want to learn next?
### Prisma
Already on prisma learning and for sure will use it in the next project.
### Websockets
Decided to learn about websockets for real-time applications like chats apps
### OOP
Want to have a solid base on OOP, this will be useful on the future with OOP languages like C# or Java
### Typescript
I see learning Typescriptas something that can make developmente more efficient and easier.
## What did i learn on this project?
- EC2 basic usage
- Docker containers
- Docker Compose
- More CSS
- MongoDB
- Mongoose
- AWS Concepts
## How it Works
### The three pages
#### Index page
The index page fetches the api and receives a json containing all registered products with its properties.
#### Register page
The register page fetches the api sending the product properties, the api manages to set if the product is on warning, unavailable or available.
#### The Product page
In the product page the user can change some properties of the product, set the input or output of stock and delete the product.
### Properties
- Model: The actual model of the product.
- Value: The value of the product.
- Stock: The amount of available items of the product
- Available: True if the stock number is not null.
- onWarning: True if the stock number is less than warningNumber.
- gender: The gender of the product.
- warningNumber: User sets this property, used by the api to check if the product is available and if onWarning is true.

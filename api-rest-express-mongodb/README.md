# RESTful API in Node.js

A RESTful API in Node.js that offers core web functionalities. It follows the Model-View-Controller (MVC) architecture, ensuring a clear separation of concerns and modularity. The Express framework is used to manage routing, providing a robust foundation for handling HTTP requests and responses.

## Key Features
1. **CRUD Operations**: The API supports basic Create, Read, Update, and Delete operations, allowing for full management of resources.
2. **Search Functionality**: In addition to CRUD operations, a search method is implemented to enable efficient querying of resources based on specified criteria.

## Technologies and Frameworks
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building scalable network applications.
- **Express**: A fast, unopinionated, minimalist web framework for Node.js, used to build the API and manage routing.
- **MongoDB**: A NoSQL database used to store data in a flexible, JSON-like format, ideal for handling large volumes of unstructured data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js, providing a straightforward, schema-based solution to model application data.

## Project Structure
- **Models**: Define the data schema and interact with the database.
- **Views**: Not applicable in a traditional sense since this is an API, but could be extended for templating if needed.
- **Controllers**: Contain the logic for handling requests, manipulating data, and sending responses.

## Setup and Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/tiago0214/desenvolve-boticario.git
   cd desenvolve-boticario/api-rest-express-mongodb/src

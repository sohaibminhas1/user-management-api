# Usermanagement Rest Api
A beginner-friendly RESTful API for user management built with Node.js, Express, and MongoDB. Implements basic CRUD operations, middleware logging, and Mongoose schema validation. Ideal for learning backend development, API structuring, and database integration. Includes both HTML and JSON routes for flexibility and testing.

## 📁 Project Structure (MVC Based)

```bash
.
├── controllers/        # Handles route logic
│   └── user.js
├── models/             # Mongoose schema
│   └── user.js
├── routes/             # Express routes
│   └── user.js
├── plugins/            # Custom middleware
│   └── plugins.js
├── log.txt             # Auto-generated request logs
├── index.js            # App entry point

(Code Walkthrough)
1. Database Connection
Inside index.js, I connect to a local MongoDB instance using Mongoose:

js
Copy
Edit
mongoose.connect('mongodb://127.0.0.1:27017/RESTAPI-DB')
2. Logging Middleware
I wrote a custom middleware (plugins/plugins.js) that runs on every request and writes log entries like this:

ruby
Copy
Edit
1691131879987 :GET :/api/users
It’s plugged into Express like this:

js
Copy
Edit
app.use(logReqRes("log.txt"))
3. User Schema
Defined in models/user.js, it includes fields like firstName, lastName, email, gender, and jobTitle. Basic validation is done using Mongoose.

4. Routes and Controllers
I used Express's router.route() to group methods together:

js
Copy
Edit
router.route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);
All route logic is handled separately in the controllers/user.js file. This keeps the route files clean and easy to manage.

🧪 Testing
I used Postman to test all endpoints and debug request/response flow. Here are some examples you can try:

Create a user
POST /api/users
With body:

json
Copy
Edit
{
  "first_name": "sohaib",
  "last_name": "minhas",
  "email": "sohaibminhas@example.com",
  "gender": "Male",
  "job_title": "Engineer"
}
Get all users
GET /api/users

Delete user
DELETE /api/users/:id

Current Limitations
PATCH endpoint currently has hardcoded update logic (lastName: "NEW VALUE")
No proper validation yet (will use express-validator in next version)
No authentication (JWT coming soon)


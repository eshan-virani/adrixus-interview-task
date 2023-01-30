# adrixus-interview-task

# ====== FRONTEND =======

1. installing node on client folder
```
npm install
```

2. How to run client
```
npm run start
```

3. Routes 
    - Dashboard Route = http://localhost:3000/home
    - Login Route = http://localhost:3000/
    - Register Route = http://localhost:3000/register


# === Worked ===
1. made login page
2. made registration page
3. made dashboard page
4. integrate a login registration api 
5. integrate a get all users data in to dashboard
6. add sorting and pagination feature in user table

#
# ====== BACKEND ======

1. installing node on backend folder
```
npm install
```

2. How to run server
```
npm start
```

3. For database you can get connection url in the server/.env file using that url make connection in you mongo compass

# === Worked

1. Login Functionality 
2. Registration Functionality
3. Get all users Functionality
5. Completed a sorting functionality (sort by age and registration date)
6. pagination

# ===> API's

Root Url : http://localhost:5000/

get User
``` 
{
  usersdata(filters:{limit:10}){
    _id
    name
    email
    age
    phone
    registered
  }
}
```

Registration
``` 
mutation {
  SignupUser(signupdata: {name: "enteryoutName", email: "enteryourEmail", password: "enterPassword"}) {
    authtoken
  }
}
```

Login
``` 
mutation {
  SignIn(logindata: {email: "enteryourEmail", password: "enteryourPassword"}) {
    authtoken
    user {
      _id
      name
      email
      age
      phone
      registered
    }
  }
}
```

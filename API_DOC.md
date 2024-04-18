# INDIVIDUAL PROJECT - DIGIGATCHA

&nbsp;

## Models :

_User_
```
- email : string, required, unique
- password : string, required
- name : string, required
- digimonCount : number, required
- digicoin : number, required
```

_Digimon_
```
- name : string, required
- image : string, required
- rarity : string, required
```

_Inventory_
```
- userID : number, required
- digimonID : number, required
```

_Shop_
```
- itemName : string, required
- price : number, required
```

&nbsp;

## Endpoints :

List of available endpoints :
- `POST /register`
- `POST /login`

Endpoints below need authentication :
- `GET /profile/:id`
- `GET /digimons`
- `GET /digimons/:id`
- `DELETE /digimons/:id`
- `GET /shops`
- `PATCH /shops`

&nbsp;

## 1. POST /register

Request:

- body:
```json
{
    "email": "string",
    "password": "string"
}
```

_Response (201 - Created)_
```json
{
    "message": "User created",
    "data": {
            "email": "string",
            "password": "string",
            "name": "New User",
            "digimonCount": 0,
            "digicoin": 100 
            }
}
```

_Response (400 - Bad Request)_
```json
{
    "message": "Please enter your email"
}
OR
{
    "message": "Email cannot be empty"
}
OR
{
    "message": "Please enter your email"
}
OR
{
    "message": "Email already registered"
}
OR
{
    "message": "Please enter your password"
}
OR
{
    "message": "Password cannot be empty"
}
```

## 2. POST /login

Request:

- body:
```json
{
    "email": "string",
    "password": "string"
}
```

_Response (201 - Created)_
```json
{
    "message": "Login success",
    "access_token": "string"
}
```

_Response (400 - Bad Request)_
```json
{
    "message": "Email/Password incorrect"
}
OR
{
    "message": "Email is required"
}
OR
{
    "message": "Password is required"
}
```

## 3. POST /profile/:id





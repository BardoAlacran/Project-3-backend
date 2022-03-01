# My project's name

Curiosity's Starship

## Description

This repository is the REST API for the [https://github.com/BardoAlacran/Project-3-frontend](link). It allows users to generate the CRUD of the web site (main content and user).

**Curiosity's Starship** is a post page starship where the user can add life tips to the rest of the net for everything, deppending on the level required for that tip (noob, mid, late, godlike).

### setup .env

you need to setup the `.env` like `.env.sample`
​

### Install the app

```
npm install
```

​

### Run the app

```
npm run start
```

​

## REST API endpoints

​
| Name | Method | Endpoint | Auth | Req.body | Redirects |
|-------|--------|-------------|------|---------------------|-----------|
| Signup | POST | /auth/signup | No | { email, password, name } | /auth/login |
| Login | POST | /auth/login | No | { email, password } | / |
| Home | GET | / | Yes | | |
|||||||
​

## Links

- [Slides]()
- [https://github.com/BardoAlacran/Project-3-frontend](link)
- [Deployed version]()

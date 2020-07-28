# Microblog

Microblog is a full-stack blogging application that allows users to create blog posts, add comments, and rank posts by votes. Blog titles and posts are stored in separate data structures in Redux store, to optimize homepage load speed.

Utilizes: React, React Hooks, Redux, Redux Thunk, Bootstrap, Node, Express, and PostgreSQL.

Live demo: https://microblog-react-app.herokuapp.com/

## Getting Started
Clone the repository and set up the database:

```
git clone https://github.com/paigegodfrey/microblog.git
createdb microblog
psql microblog < data.sql
```

Start the backend server:

```
cd backend/
npm install
nodemon
```

Run the frontend:

```
cd frontend/
npm install
npm start
```

This was a pair programming project, with collaborator: https://github.com/martinjwkim

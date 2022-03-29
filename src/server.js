import express from "express"
import {getUsers,addUser} from './repositories /UserRepository'

const app = express()

app.get('/', (request, response) => {
  const users = getUsers()

  return response.json({ users })
});

app.listen(3333);
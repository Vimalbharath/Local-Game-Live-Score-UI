import axios from 'axios'
import { config } from '../../Constants'

export const bookApi = {
  authenticate,
  signup,
  numberOfUsers,
  numberOfBooks,
  getUsers,
  deleteUser,
  getBooks,
  deleteBook,
  addBook,
  getTeams,
  addTeam,
  addPlayer,
  addTeaminPoint,
  addMatch,
  addMatchinDetails,
  addDetails,
  addDetailsPoint,
}

function authenticate(username, password) {
  return instance.post('/auth/authenticate', { username, password }, {
    headers: { 'Content-type': 'application/json' }
  })
}

function signup(user) {
  return instance.post('/auth/signup', user, {
    headers: { 'Content-type': 'application/json' }
  })
}

function numberOfUsers() {
  return instance.get('/public/numberOfUsers')
}

function numberOfBooks() {
  return instance.get('/public/numberOfBooks')
}

function getUsers(user, username) {
  const url = username ? `/api/users/${username}` : '/api/users'
  return instance.get(url, {
    headers: { 'Authorization': basicAuth(user) }
  })
}

function getTeams() {
  return instance.get('/api/public/teams')
}

function deleteUser(user, username) {
  return instance.delete(`/api/users/${username}`, {
    headers: { 'Authorization': basicAuth(user) }
  })
}

function getBooks(user, text) {
  const url = text ? `/api/books?text=${text}` : '/api/books'
  return instance.get(url, {
    headers: { 'Authorization': basicAuth(user) }
  })
}

function deleteBook(user, isbn) {
  return instance.delete(`/api/books/${isbn}`, {
    headers: { 'Authorization': basicAuth(user) }
  })
}

function addBook(user, book) {
  return instance.post('/api/books', book, {
    headers: {
      'Content-type': 'application/json',
      'Authorization': basicAuth(user)
    }
  })
}
function addTeam(user, team) {
  return instance.post('/api/admin/team', team, {
    headers: {
      'Content-type': 'application/json',
      'Authorization': basicAuth(user)
    }
  })
}
function addTeaminPoint(user,team, teamid) {
  return instance.post(`/api/admin/point/${teamid}`,team, {
    headers: {
      'Content-type': 'application/json',
      'Authorization': basicAuth(user)
    }
  })
}
function addMatchinDetails(user,details, matchid) {
  return instance.post(`/api/admin/details/${matchid}`,details, {
    headers: {
      'Content-type': 'application/json',
      'Authorization': basicAuth(user)
    }
  })
}
function addDetails(user,details, detailsid,teamid,playerid,tossWinner,innings1Score,innings2Score) {
  return instance.put(`/api/admin/details/${detailsid}/${teamid}/${playerid}/?toss=${tossWinner}&innings1Score=${innings1Score}&innings2Score=${innings2Score}`,details, {
    headers: {
      'Content-type': 'application/json',
      'Authorization': basicAuth(user)
    }
  })
}
function addDetailsPoint(user,details, detailsid) {
  return instance.put(`/api/admin/updatepoints/${detailsid}`,details, {
    headers: {
      'Content-type': 'application/json',
      'Authorization': basicAuth(user)
    }
  })
}
function addPlayer(user, team,teamid) {
  return instance.post(`/api/captain/player/${teamid}`, team, {
    headers: {
      'Content-type': 'application/json',
      'Authorization': basicAuth(user)
    }
  })
}

function addMatch(user, match,team1id,team2id) {
  return instance.post(`/api/admin/match/${team1id}/${team2id}`, match, {
    headers: {
      'Content-type': 'application/json',
      'Authorization': basicAuth(user)
    }
  })
}

// -- Axios

const instance = axios.create({
  baseURL: config.url.API_BASE_URL
})

// -- Helper functions

function basicAuth(user) {
  return `Basic ${user.authdata}`
}
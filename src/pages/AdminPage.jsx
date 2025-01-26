"use client"

import React, { useState } from "react"

// Simplified Button component
const Button = ({ children, ...props }) => (
  <button
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    {...props}
  >
    {children}
  </button>
)

// Simplified Input component
const Input = (props) => (
  <input
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
  />
)

// Simplified Card components
const Card = ({ children }) => <div className="bg-white shadow-md rounded-lg overflow-hidden">{children}</div>

const CardHeader = ({ children }) => <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">{children}</div>

const CardTitle = ({ children }) => <h2 className="text-xl font-semibold text-gray-800">{children}</h2>

const CardContent = ({ children }) => <div className="px-6 py-4">{children}</div>

// Simulated admin users database
const admins = [
  { id: 1, username: "admin1", password: "pass1" },
  { id: 2, username: "admin2", password: "pass2" },
  { id: 3, username: "admin3", password: "pass3" },
]

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()
    const admin = admins.find((a) => a.username === username && a.password === password)
    if (admin) {
      setIsLoggedIn(true)
      setError("")
    } else {
      setError("Invalid username or password")
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername("")
    setPassword("")
  }

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Admin Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Welcome, {username}! You are now logged in as an admin.</p>
            <Button onClick={handleLogout}>Logout</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <Button type="submit">Login</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}


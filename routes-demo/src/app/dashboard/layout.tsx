import React from 'react'

function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode
  users: React.ReactNode
  revenue: React.ReactNode
  notifications: React.ReactNode
  login: React.ReactNode
}) {
  const isLoggedIn = true
  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex">{notifications}</div>
      </div>
    </div>
  ) : (
    login
  )
}

export default DashboardLayout

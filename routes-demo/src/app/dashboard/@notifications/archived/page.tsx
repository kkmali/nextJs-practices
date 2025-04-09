import Card from '@/app/components/generic/Card'
import Link from 'next/link'
import React from 'react'

function ArchivedNotifications() {
  return (
    <>
      <Card>
        <div>
        Archived Notifications
        </div>
      <Link className="border p-1 ml-3 rounded-xl" href="/dashboard" >Default</Link>
    </Card>
    </>
  )
}

export default ArchivedNotifications
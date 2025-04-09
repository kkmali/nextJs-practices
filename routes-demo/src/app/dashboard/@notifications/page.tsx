import Card from '@/app/components/generic/Card'
import Link from 'next/link'
import React from 'react'

function Notifications() {
  return (
    <>
      <Card>
        <div>Notifications</div>
        <Link className="border p-1 ml-3 rounded-xl" href="/dashboard/archived" >Archived</Link>
      </Card>
    </>
  )
}

export default Notifications
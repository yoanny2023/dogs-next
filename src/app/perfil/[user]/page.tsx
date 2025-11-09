import photoGet from '@/actions/photos-get'
import Feed from '@/components/feed/feed'
import React from 'react'

async function UserPage({params} : {
  params: {
    user: string
  }
}) {
  const{data} = await photoGet({user: params.user})
  if(!data) return null;

  return (
   <section className='container mainSection'>
    <h1 className='title'>{params.user}</h1>
    <Feed photos={data} user={params.user} />
   </section>
  )
}

export default UserPage

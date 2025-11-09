import photoGet from '@/actions/photo-get'
import PhotoContent from '@/components/photo/photo-content';
import { notFound } from 'next/navigation';
import React from 'react'

type FotoIdParams = {
  params:{
    id:string
  }
}

export async function generateMetadata({params}: FotoIdParams){
  const{data} = await photoGet(params.id);
  
  if(!data) return {title: "fotos"}
  return {
    title: data?.photo.title
  }
}

async function FotoIdPage({params}: FotoIdParams ) {
  const{data} = await photoGet(params.id)
  if(!data) return notFound();

  return (
    <section className='container mainContainer'>
      <PhotoContent data={data} single={true} />
    </section>
  )
}

export default FotoIdPage

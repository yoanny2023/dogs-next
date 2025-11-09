import ContaPhotoPost from '@/components/conta/conta-photo-post'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
title: "Postar | Minha Conta"
}

export const runtime = "edge" // avoid erro when posting on next server

async function PostarPage() {
  return (
   <main>
    <ContaPhotoPost />
   </main> 
  )
}

export default PostarPage

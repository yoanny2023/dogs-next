import React from 'react'
import { Metadata } from 'next'
import LoginCriarForm from '@/components/login/login-criar-form'

export const metadata: Metadata = {
  title: "Crie sua conta",
  description: "Crie sua conta no site Dogs."
}

async function CriarPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <LoginCriarForm />
    </div>
  )
}

export default CriarPage

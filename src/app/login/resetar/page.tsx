import React from 'react'
import { Metadata } from 'next'
import LoginResetarForm from '@/components/login/login-resetar-form'

export const metadata: Metadata = {
  title: "Resetar a senha | Dogs",
  description: "Resete a sua senha."
}

type ResetarSenhaParams = {
  searchParams: {
    key: string,
    login: string
  }
}

async function ResetarPage({searchParams}: ResetarSenhaParams) {
  return (
    <div className="animeLeft">
      <h1 className="title">Resete a Senha</h1>
      <LoginResetarForm
        keyToken={searchParams.key}
        login={searchParams.login}
      />
    </div>
  )
}

export default ResetarPage

import statsGet from '@/actions/stats-get'
import { Metadata } from 'next'
import dynamic from 'next/dynamic';
import React from 'react'

// importar de forma dinamica para lazy loading do graph

const ContaEstatisticas = dynamic(() => import('@/components/conta/estatisticas'),{
  loading: () => <p>Carregando...</p>,
  ssr: false
})

export const metadata: Metadata = {
title: "Estatísticas Minha Conta"
}

async function EstatisticasPage() {
  const{data} = await statsGet();

  if(!data) return null;
  return (
   <section>
    <ContaEstatisticas data={data} />
   </section>
  )
} 

export default EstatisticasPage

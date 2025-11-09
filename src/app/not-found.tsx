import Link from "next/link";

export default function NotFount(){
  return (
    <section className="container">
      <h1 className="title">Pagina não encontrada</h1>
      <Link 
        style={{marginBottom:"1rem", display:"inline-block"}}
        className="button" 
        href="/">Volte para Home.
      </Link>
    </section>
  )
}
"use server"
import { PASSWORD_LOST_POST } from "@/functions/api";
import apiError from "@/functions/api-error";

export default async function passwordLost(state:{}, formData: FormData) {
  const login = formData.get("login") as string | null
  const urlPerdeu = formData.get("url") as string | null

try {
 if(!login ) throw new Error("Preencha os dados");
 const{url} = PASSWORD_LOST_POST()

  const response = await fetch(url,{
    method:"POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      login,
      url: urlPerdeu
    })
  }  
);

  if(!response.ok) throw new Error("Email ou usuário não cadastrado")

  return {data:null, ok:true, error: ""} // como nao quero retomar o token, so para este caso data sera null.
} catch (error:unknown) {
  return apiError(error)
  }
} 
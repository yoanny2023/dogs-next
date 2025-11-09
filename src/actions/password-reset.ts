"use server"
import {PASSWORD_RESET_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { redirect } from "next/navigation";

/* headers:{ quando passamos formData nao devemos usar este cabecalho, para nao dar erro.
      'Content-Type': 'application/json'
    }*/

export default async function passwordReset(state:{}, formData: FormData) {
  const login = formData.get("login") as string | null
  const password = formData.get("password") as string | null
  const key = formData.get("key") as string | null


try {
 if(!login || !key || !password) throw new Error("Preencha os dados");
 const{url} = PASSWORD_RESET_POST()

  const response = await fetch(url,{
    method:"POST",
    body: formData
  }  
);

  if(!response.ok) throw new Error("Não Autorizado")

} catch (error:unknown) {
  return apiError(error)
  }
  redirect("/login");
} 
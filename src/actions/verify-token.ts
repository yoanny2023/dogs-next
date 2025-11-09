export default async function verifyToken(token: string): Promise<boolean>{
    if(!token) return false;
  try {
     /* codeigo pra vefficar token */
     return true
  } catch (error) {
    return false
  }
}
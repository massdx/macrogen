
import { ApiRoute } from "@/lib/api-route";

export type SuccessLogin = {
    token: string;
}
export  type TroubleLogin = {
    code: number,
    message: string
    token?: string 
}

export type LoginResponse = SuccessLogin | TroubleLogin;

//authentification  
export async function login({ email, password }: { email: string, password: string }): Promise<LoginResponse | null> {
    try {

        const response = await fetch(ApiRoute.login, {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" }
        })

        if (response.status != 200) {
            throw new Error(response.status.toString())
        }

        const data = await response.json();

        return data as SuccessLogin;
        
    } catch (e) {

        console.log("Une erreur c'est produite.", e);

        return null;

    }
}

export function fakeLogin(): Promise<{token: string }>  {
    return new Promise((resolve, reject) => {
   
      setTimeout(() => {
 
        try {
          const token = "fakeToken";
          const data = { token };
          resolve(data);
        } catch (error) {
       
          reject(error);
        }
      }, 1000); 
    });
  }
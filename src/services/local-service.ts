"use client";
import { setCookie , getCookie , getCookies , deleteCookie} from 'cookies-next';
export function  setLocalUser (token: string ) {
        sessionStorage.setItem('token', token);
        setCookie('token', { token }, {
          expires: new Date(Date.now() + 3600 * 24 * 7), 
          httpOnly: true, 
        });
        localStorage.setItem("TOKEN" ,token ); 
       
}

export  function  getLocalUser () {
  if (typeof window !== 'undefined') {
    return localStorage.getItem("TOKEN");
  }
}

export  function  getUserCookie () {
  return  getCookie("token")
}


export async function  deleteLocalUser () {
    localStorage.removeItem("TOKEN");
}
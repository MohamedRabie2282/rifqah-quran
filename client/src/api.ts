const base=import.meta.env.VITE_API_URL||'http://localhost:4000/api';

export type Session={token:string;user:{id:string;fullName:string;email?:string;role:'STUDENT'|'SHEIKH'|'GUARDIAN'}};

export async function request<T>(path:string,token?:string,init:RequestInit={}){
  const response=await fetch(`${base}${path}`,{...init,headers:{'Content-Type':'application/json',...(token?{Authorization:`Bearer ${token}`}:{}) ,...init.headers}});
  const data=await response.json().catch(()=>({message:'تعذّر قراءة استجابة الخادم'}));
  if(!response.ok)throw new Error(data.message||'تعذّر تنفيذ العملية');
  return data as T;
}

export const login=(email:string,password:string)=>request<Session>('/auth/login',undefined,{method:'POST',body:JSON.stringify({email,password})});

export const register=(fullName:string,email:string,password:string,role:'STUDENT'|'SHEIKH'|'GUARDIAN',inviteCode?:string)=>request<Session>('/auth/register',undefined,{method:'POST',body:JSON.stringify({fullName,email,password,role,inviteCode})});

export const forgotPassword=(email:string)=>request<{message:string}>('/auth/forgot-password',undefined,{method:'POST',body:JSON.stringify({email})});

export const resetPassword=(token:string,password:string)=>request<{message:string}>('/auth/reset-password',undefined,{method:'POST',body:JSON.stringify({token,password})});

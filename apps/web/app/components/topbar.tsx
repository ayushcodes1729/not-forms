"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function Topbar() {
    const session = useSession()
    return(
        <div>
            <button className="px-4 py-2 bg-blue-400">
                {
                    session.data?.user ? <span onClick={()=>signOut({callbackUrl : "/"})}>Signout</span> : <span onClick={()=> signIn()}>SignIn</span>
                }
            </button>
        </div>
    )
}
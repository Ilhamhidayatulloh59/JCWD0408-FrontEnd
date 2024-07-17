'use client'

import supabase from "@/supabase"
import { useEffect, useState } from "react"

// interface IUser {
//     email?: string
//     user_metadata?: {
//         avatar_url: string
//     }
// }

export const AuthPage = () => {
    const [user, setUser] = useState<any>(null)
    const getData = () => {
        supabase.auth.onAuthStateChange((event, session) => {
            // console.log(event, session);
            setUser(session?.user)
        })
    }

    const signInWithGoogle = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                queryParams: {
                    access_type: 'offline',
                    prompt: 'consent'
                }
            }
        })

        if (error) {
            console.log("Error during Google sign-in:", error.message)
        }
        console.log(data);
    }

    const handleSignOut = () => {
        supabase.auth.signOut()
        setUser(null)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            { user && (
                <div>
                    <div>
                        {user.email}
                    </div>
                    <img 
                        src={user.user_metadata.avatar_url} 
                        className="rounded-full" 
                    />
                </div>
            )}
            {
                user ?
                <button onClick={handleSignOut} className=" bg-green-500 p-2 rounded-lg">
                    Sign out
                </button>
                    :
                <button onClick={signInWithGoogle} className=" bg-green-500 p-2 rounded-lg">
                    Sign in with Google
                </button>
            }
        </div>
    )
}
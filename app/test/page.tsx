import SignOut from "@/components/sign-out";
import { useSession } from "next-auth/react";
export default function Test(){
    const {data: session} = useSession({
        required: true
    })

    return(<>
    <div>
this is test page
<p> {session?.user?.email} </p>

<SignOut />
    </div>
    </>)
}
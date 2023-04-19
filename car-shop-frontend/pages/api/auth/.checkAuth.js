import { NextResponse } from "next/server";
import { decodeJwt, jwtVerify } from "jose";

const secret = process.env.TOKEN_SECRET;

export default async function isAuthenticated(req){
  var mail = undefined;
    const auth = req.cookies.get('Cookie')

    // const claims = decodeJwt(auth.value)
    // console.log(claims)
     
    
    if( auth === undefined)
        return res.json({ isAuthenticated: false, message: "Not authenticated!"});
    else if(auth){
        try {
            console.log("NEW FUNC")
            const user  = await jwtVerify(auth.value , new TextEncoder().encode(secret));
            console.log("user:" ,user.payload.email)
           return true;
            // return NextResponse.redirect(new URL("/dashboard/user", req.url));
          } catch (error) {
            console.error(error)
            return false
          }  
}
}
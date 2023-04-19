import { NextResponse } from "next/server";
import { decodeJwt, jwtVerify } from "jose";

const secret = process.env.TOKEN_SECRET;

export async function middleware(req){
  //console.log(req)
    var mail = undefined;
    const auth = req.cookies.get('Cookie')
    console.log("AUTH ",auth)
    // const claims = decodeJwt(auth.value)
    // console.log(claims)
     
    
    if( auth === undefined)
     return NextResponse.redirect(new URL('/login', req.url))
    else if(auth){
        try {
            console.log("try")
            const user  = await jwtVerify(auth.value , new TextEncoder().encode(secret));
            console.log("USER:" ,user.payload.email)
            mail = user.payload.email;
            console.log(mail)
            return NextResponse.next();
            // return NextResponse.redirect(new URL("/dashboard/user", req.url));
          } catch (error) {
            console.error(error)
            return NextResponse.redirect(new URL("/login", req.url));
          }
    }
  //   if (auth) {
  //   if (req.nextUrl.pathname.includes("/login")) {
  //     try {
  //       await jwtVerify(auth, new TextEncoder().encode("secret"));
  //       console.log(new TextEncoder().encode("secret"))
  //       return NextResponse.redirect(new URL("/dashboard/user", req.url));
  //     } catch (error) {
  //       return NextResponse.next();
  //     }
  //   }
  // }
  //       // return NextResponse.rewrite(new URL('/login', req.nextUrl))
  //       try {
  //           const { payload } = await jwtVerify(
  //             auth,
  //             new TextEncoder().encode("secret")
  //           );
  //           console.log({ payload });
  //           return NextResponse.next();
  //         } catch (error) {
  //           return NextResponse.redirect(new URL("/login", req.url));
  //         }

}

export const config={
    matcher: ["/dashboard/:path*","/addCar","/company"]
}

    
// if( auth === undefined)
// return NextResponse.redirect(new URL('/login', req.url))
// else if(auth){
//  const token = auth.value;
//  console.log(token)
//    try {
//        console.log("try")
//        auth2 = await auth.json()
//        console.log("AUTH: " , auth2)
//        const { payload, protectedHeader } = await jwtVerify(auth2.token, secretKey, {
//          issuer: process.env.JWT_ISSUER, // issuer
//          audience: process.env.JWT_AUDIENCE, // audience
//        });
//        // log values to console
//        console.log("user where?s")
//        console.log(payload);
//        console.log(protectedHeader);
//        return NextResponse.redirect(new URL("/dashboard/user", req.url));
//      } catch (error) {
//        return NextResponse.next();
//      }
// }
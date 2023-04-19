import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';

const secret = process.env.TOKEN_SECRET;

export default async function (req, res){
    console.log(req.body)
    const {success, message, email} = req.body;
    console.log("HERE")
    console.log(success,message,email)

    // logged
    if ( success == 1){
        console.log("here2");
        const token = sign(
        {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            email: email  
        },
        secret,
        );
        const serialized = serialize('Cookie', token,{
            httpOnly: true,
            sameSite: "strict",
            maxAge: 60 * 60,
            path: "/"
        })
        res.setHeader("Set-Cookie", serialized);
        res.status(200).json({ message: "Success!"});
    }
    else{
        res.json({ message: "Invalid credentials!"});
    }

}

// import { sign } from 'jsonwebtoken';
// import { serialize } from 'cookie';
// import { SignJWT } from 'jose';
// const { createSecretKey } = require('crypto');

// const secret = process.env.TOKEN_SECRET;

// const secretKey = createSecretKey(process.env.TOKEN_SECRET, 'utf-8');

// export default async function (req, res){
//    // const secretKey = createSecretKey(process.env.JWT_SECRET, 'utf-8');
//     console.log(req.body)
//     const {success, message, email} = req.body;
//     console.log("HERE")
//     console.log(success,message,email)

//     // logged
//     if ( success == 1){
//         console.log("here2");
//         const token = new SignJWT({ email: email })
//         .setProtectedHeader({ alg: 'HS256' })
//         .setIssuedAt()
//         .setIssuer(process.env.JWT_ISSUER)
//         .setAudience(process.env.JWT_AUDIENCE)
//         .setExpirationTime('2h')
//         .sign(secretKey)
//         console.log(token); 
//         // const token = sign(
//         // {
//         //     exp: Math.floor(Date.now() / 1000) + 60 * 60,
//         //     email: email  
//         // },
//         // secret,
//         // );
//         const serialized = serialize("Cookie", token,{
//             httpOnly: true,
//             sameSite: "strict",
//             path: "/"
//         })
//         res.setHeader("Set-Cookie", serialized);
//         res.status(200).json({ message: "Success!"});
//     }
//     else{
//         res.json({ message: "Invalid credentials!"});
//     }

// }
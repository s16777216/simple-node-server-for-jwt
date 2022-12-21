import jwt from "jsonwebtoken"


export function generateToken(key, payload, expireTime){
    let token = jwt.sign(payload,key,{
        expiresIn: expireTime
    })
    return token
}

export function authToken(token, key){
    let result = {
        status: false
    }
    try {
        let decode = jwt.verify(token, key)
        result.status = true
        result.username = decode.username
    } catch (error) {
        if(exception.name.includes('JsonWebTokenError')){
            result.status = false
        }
    }
    
    return result
}
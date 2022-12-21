

export class logger {

    constructor(data){
        
    }

    info(msg) {
        this.log(`INFO|${msg}`)
    }

    warning(msg){
        this.log(`WARNING|${mag}`)
    }

    log(method, msg){
        let methodColor = ""
        switch(method){
            case 'info':
                methodColor = "green"
                break
            case "warning":
                methodColor = "orange"
                break
            case "error":
                methodColor = "red"
                break
        }
        console.log(`%c ${method}|${msg}`, `color: ${methodColor}`)
    }

}
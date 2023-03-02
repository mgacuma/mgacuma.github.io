
export class ResponseParser {
    constructor(){

    }

    parse(text: string){
        return text.replace(/(&quot\;)/g,"\"").replace(/(&#039\;)/g, '\'').replace(/(&deg\;)/g, '°').replace(/(&amp\;)/g, '&').replace(/(&eacute\;)/g, 'é')
    }
}
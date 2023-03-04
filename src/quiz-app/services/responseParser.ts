export class ResponseParser {

    parse(text: string){
        return text
            .replace(/(&quot\;)/g,"\"")
            .replace(/(&#039\;)/g, '\'')
            .replace(/(&deg\;)/g, '°')
            .replace(/(&amp\;)/g, '&')
            .replace(/(&eacute\;)/g, 'é')
            .replace(/(&iacute\;)/g, 'í')
            .replace(/(&aacute\;)/g, 'á')
            .replace(/(&lquot\;)/g, '“')
            .replace(/(&rquot\;)/g, '”')
            .replace(/(&lsquot\;)/g, '‘')
            .replace(/(&rsquot\;)/g, '’')
    }
}
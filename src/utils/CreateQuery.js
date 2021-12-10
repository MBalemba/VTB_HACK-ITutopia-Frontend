export const createQuery = (obj) => {
    let j = 0;
    let str='';


    for(let i in obj){
        if(j===0){
            str+='?'+ i+ '='+ obj[i]
        } else {
            str+='&'+ i+ '='+ obj[i]
        }
        j++
    }


    if(j===0){
        str=''
    }

    return str
}
function mapLetters(str){
  let obj = {}
  for(let i = 0; i<str.length; i++){ 
      let t = str[i] // d, o, d, o
        if(obj[t] == undefined){
            obj[t] = [i]  // {d: [0,2], o: [1,3]}
        }
        else{
            let arr = obj[t] // [0,2]
            arr.push(i)
        }
  }

    return obj
}


const str = prompt("Enter str: ");
alert(JSON.stringify(mapLetters(str)));
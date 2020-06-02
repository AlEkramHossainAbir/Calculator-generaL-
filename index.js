
/* function insert(number){
    var existingNumber=$("#result").val()
    $("#result").val(existingNumber+ number)
} 
 */
$(".Header_box").mouseover(function(){
    $(".Header_box").addClass("js")
})
$(".Header_box").mouseout(function(){
    $(".Header_box").removeClass("js")
})
let result = $("#result")
let insert= number =>{
    var existingNumber=result.val()
    result.val(existingNumber+ number)
}

let clearAll = ()=>{
    result.val('')
}
let calculate = ()=>{
  let value= eval(result.val())
    result.val(value)
}

let lastDigit = () =>{
    let value = result.val();
    
    if(value!=''){
        
        let sliceValue= value.slice(0,-1);
        result.val(sliceValue);
    }
    else{
        result.val()
    }

}
let sqrt = () =>{
    let value = Math.sqrt(result.val());
    result.val(value)
}

let posneg = () =>{
    let existingNumber= result.val();
    result.val(existingNumber*(-1));
}
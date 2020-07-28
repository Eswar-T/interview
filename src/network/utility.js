export const api = (successfunction) =>{
   fetch("https://jsonplaceholder.typicode.com/posts")
                .then((response) => response.json())
                .then( (responseJson) => {  
                console.log("responseJson", responseJson)                                                     
                successfunction(responseJson)
                })
                .catch((error) =>{ 
                console.log("error",error)
                errorfunction(error);
            })

   
}
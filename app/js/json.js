  import  getData  from "./api.js";
    const apiData     =  document.querySelector(".api-data")
   const spinner = document.querySelector('.spinner-border')
   const tipoCursoFilter = document.querySelector('.tipoCurso-filter')

   showSpinner(false)
  
  function rendercards(CursoList) {
    CursoList.forEach(function(Curso)

                 {

                    apiData.innerHTML += 
                     ` 
                       <div class ="card m-2"  style="width:522px height:522px"  > 
                       <section class="card-body"><h2>${Curso.nome_curso}</h2>

                       <p>nível de ensino:${Curso.nivel_de_ensino} </p>
                       
                       <p> Duração:  ${Curso.duração} </p> 
                     
                                        
                        <p>Município: ${Curso.município}</p>

             </section>       </div>      </br>   `        }); 

  }  





  function rendercardsNotfound() {
   
    if  ( apiData.innerHTML==""){
      
      apiData.innerHTML += 
      ` 
        <div class ="card m-2"  style="width:522px height:522px"  > 
        <section class="card-body"><h2>Nenhum resultado encontrado para: </h2>
        <h2 style = "color : #c32d52"   > &nbsp &nbsp &nbsp &nbsp    ${input_search.value} </h2>
</section>       </div>      </br>   `     
    }  
        } 


function showSpinner(isShow=false){
  if(isShow){
    spinner.style.display="block"
    
   return
  }
  spinner.style.display="none"
}

    async function listarCursos(){
      
        
        showSpinner(true)
        const response   = await getData( `Curso`   )
        showSpinner(false)
        const CursoList = Array.from(response.data)
         rendercards(CursoList)

        }  
   
   
    



   async function search(query){
  //         const response   = await axios.get(url)
        
           apiData.innerHTML=""
           showSpinner(true)
           const response   = await getData(`Curso?q=${query}`)
           console.log(" aqeqweqweasdqe",response)
           const CursoList  = response.data
          
           showSpinner(false)

           rendercards(CursoList)
          
          rendercardsNotfound()
          
           
          
           
          
        
          
          
          
          
          }
  
   
    
   
   
  
   
 


    tipoCursoFilter.addEventListener('change',function(){
      apiData.innerHTML=""
      showSpinner(true)
      showSpinner(false)
      spinner.style.display="none"
      

                     search(tipoCursoFilter.value)
                                                       })



   const  btn_buscar = document.querySelector('.btn_Buscar')
    const input_search = document.querySelector('input[type=search]')


   btn_buscar.addEventListener('click',function(){
   search(input_search.value)
   
   console.log(input_search.value)
   console.log('clciado')
   })
   

    
  
    
   
    
   async function ListarTipoCurso(){

    
    const response   = await getData(`tipoCurso`)
    const tipoCursoList = Array.from(response.data)
    tipoCursoList.forEach(function(tipoCurso){
      tipoCursoFilter.innerHTML+=`<option value="${tipoCurso.nivel_de_ensino}">${tipoCurso.nivel_de_ensino}</option>`
    })

}
listarCursos(),
ListarTipoCurso()











 //----------------------------------
   //----------------------------------


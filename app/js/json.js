
    const apiData     =  document.querySelector(".api-data")
   const spinner = document.querySelector('.spinner-border')
   const tipoCursoFilter = document.querySelector('.tipoCurso-filter')

  spinner.style.display="none"


    async function listarCursos(){
        const url   = "http://localhost:3000/Curso"
        spinner.style.display="block"
        const response   = await axios.get(url)
        spinner.style.display="none"

        const CursoList = Array.from(response.data)
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
   
   
   



   async function search(query){
           const url =  `http://localhost:3000/Curso?q=${query}`
  //         const response   = await axios.get(url)
        
           apiData.innerHTML=""
           spinner.style.display="block"
       
           const response   = await axios.get(url)
           const CursoList  = response.data
          
           spinner.style.display="none"
      
             CursoList.forEach(function(Curso) {
      
          apiData.innerHTML +=` <div class ="card m-2"  style="width:522px height:522px"  > 
                                 <section class="card-body"><h2>${Curso.nome_curso}</h2>
   
                                  <p>nível de ensino:${Curso.nivel_de_ensino} </p>
                                  <p> Duração:  ${Curso.duração} </p>
                                  <p>Município:  ${Curso.município}  </p> 
   
                                  </section></div></br>`});  }
  
   
    
   
   
  
   
 


    tipoCursoFilter.addEventListener('change',function(){
      apiData.innerHTML=""
      spinner.style.display="block"
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
   console.log(response) 

    }
  
    
   
    
   async function ListarTipoCurso(){
    const url =`http://localhost:3000/tipoCurso`
    const response = await axios.get(url)
    const tipoCursoList = Array.from(response.data)
    tipoCursoList.forEach(function(tipoCurso){
      tipoCursoFilter.innerHTML+=`<option value="${tipoCurso.nivel_de_ensino}">${tipoCurso.nivel_de_ensino}</option>`
    })

}
listarCursos()
ListarTipoCurso()











 //----------------------------------
   //----------------------------------


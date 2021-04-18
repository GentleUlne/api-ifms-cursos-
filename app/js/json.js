
    const apiData     =  document.querySelector(".api-data")
   const spinner = document.querySelector('.spinner-grow')
   const tipoCursoFilter = document.querySelector('.tipoCurso-filter')


    async function listarCursos(){
   const url   = "http://localhost:3000/Curso"

   const response   = await axios.get(url)
  

  const CursoList = Array.from(response.data)
  CursoList.forEach(function(Curso)

  {
      
    apiData.innerHTML += 
   ` 
   <div class ="card m-2"  style="width:522px height:522px"  > 
   <section class="card-body"><h2>${Curso.nome_curso}</h2>
   
   <p>nível de ensino:
   ${Curso.nivel_de_ensino}
    </p>
  
   <p> Duração:
   ${Curso.duração}
    </p>
   <p>Município:
   ${Curso.município} 
   </p> 
   </section>
   

   
  </div>
   </br>
    
   `
   
  });
   





   async function search(query){
    const url =  `http://localhost:3000/Curso?q=${query}`
 
 const response   = await axios.get(url)
  const CursoList  = response.data

  
  apiData.innerHTML=""
  CursoList.forEach(function(Curso) {
      
    apiData.innerHTML += 
   ` 
   <div class ="card m-2"  style="width:522px height:522px"  > 
   <section class="card-body"><h2>${Curso.nome_curso}</h2>
   
   <p>nível de ensino:
   ${Curso.nivel_de_ensino}
    </p>
  
   <p> Duração:
   ${Curso.duração}
    </p>
   <p>Município:
   ${Curso.município} 
   </p> 
   </section>
   

   
  </div>
   </br>
    
   `
   
  });
   
   }








  



   tipoCursoFilter.addEventListener('change',function(){
  search(tipoCursoFilter.value)
})



   const  brn_buscar = document.querySelector('.btn_Buscar')
    const input_search = document.querySelector('input[type=search]')
   brn_buscar.addEventListener('click',function(){
   search(input_search.value)
   console.log(input_search.value)
   console.log('clciado')
   })
   console.log(response) 

    }
  
    
    listarCursos()
    
   async function ListarTipoCurso(){
    const url =`http://localhost:3000/tipoCurso`
    const response = await axios.get(url)
    const tipoCursoList = Array.from(response.data)
    tipoCursoList.forEach(function(tipoCurso){
      tipoCursoFilter.innerHTML+=`<option value="${tipoCurso.nivel_de_ensino}">${tipoCurso.nivel_de_ensino}</option>`
    })

}
ListarTipoCurso()
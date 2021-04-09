
    const apiData     =  document.querySelector(".api-data")

    async function listarCursos(){
   const url   = "http://localhost:3000/Curso"

   const response   = await axios.get(url)
  const CursoList  = response.data

  CursoList.forEach(function(Curso) {
      
    apiData.innerHTML += 
   ` <div class ="card m-2"  style="width:522px height:522px"  > 
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
   
   console.log(response) 

    }

    listarCursos()
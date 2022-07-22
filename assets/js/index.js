function Search(load, roomSearch, inMeter, endMeters) {
    if (
      load == 'clic' &&
      (roomSearch == '' || inMeter == '' || endMeters == '') 
    ) {
      alert('faltan campos por rellenar')
    } else if (Number(inMeter) > Number(endMeters)) {
      alert('el campo desde no puede ser mayor del campo hasta')
    } else {
      
      let html = ''
      let count = 0 
      for (let filter of propiedadesJSON) {
        if (
          filter.rooms >= roomSearch && 
          filter.m >= inMeter &&
          filter.m <= endMeters 
        ) {
          count += 1 
          html += `<section id="Propiedades">
            
                <div class="propiedades">
                  <div class="propiedad">
                    <div class="img" style="background-image: url('${filter.src}')"></div>
                    <section>
                        <h5>${filter.name}</h5>
                        <div class="d-flex justify-content-between">
                            <p>Cuartos: ${filter.rooms}</p>
                            <p>Metros: ${filter.m}</p>
                        </div>
                        <p class="my-3">${filter.description}</p>
                        <button class="btn btn-info ">Ver más</button>
                    </section>
                  </div>
              </div>
            </section>`
        }
      }
  
      document.querySelector('.propiedades').innerHTML = html
      document.querySelector('#numDisplay').innerHTML = `Total: ${count}` 
    }
  }
  
  Search('charge', -Infinity, -Infinity, Infinity)
  
  document.getElementById('search').addEventListener('click', () => {
    let cantRooms = document.querySelector('#numRooms').value
    let minMts = document.querySelector('#fromMeters').value
    let maxMts = document.querySelector('#uptoMeters').value
    Search('clic', cantRooms, minMts, maxMts)
  })
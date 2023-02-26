function imt () {
    let h = document.getElementById('h').value;
    let w = document.getElementById('w').value;
    let imt = w /(h/100) ** 2      
  
    if (imt < 18.5) {
      document.getElementById('status').innerText  = 'недостающая масса'  
    } else if (imt < 24.9){
        document.getElementById('status').innerText  = 'средняя масса'  
    } else if (imt < 29.9){
        document.getElementById('status').innerText  = ' избыточная масса'  
    } else if (imt < 34.9){
        document.getElementById('status').innerText  = 'Ожирение 1 степени'  
    } else if (imt < 39.9){
        document.getElementById('status').innerText  = 'Ожирение 2 степени '  
    } else if (imt >= 39.9){
        document.getElementById('status').innerText  = 'Ожирение 3 степени '  
    }
    document.getElementById('result').innerText  = imt
}
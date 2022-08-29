let rango1 = document.getElementById('range1');
let texto1 = document.getElementById('texto1');

let rango2 = document.getElementById('range2');
let texto2 = document.getElementById('texto2');

let rango3 = document.getElementById('range3');
let texto3 = document.getElementById('texto3');

let btnSubmit = document.getElementById('btn');
let user = document.querySelectorAll('#user');
let user2 = document.querySelectorAll('#user2');

const creditoTb = document.getElementById('crédito');
const tribuTb = document.getElementById('tribu');

let cuota = document.getElementById('inputCuota')
const resultado = document.querySelector('.containerResultado');
const rangosApp = () => {
    rango1.oninput = () => {
        if(rango1.value > 4) {
            texto1.innerHTML = `${rango1.value} o más créditos`
        } else {
            texto1.innerHTML = `${rango1.value} créditos`
        }
    }
    rango2.oninput = () => {
        texto2.innerHTML = `$ ${rango2.value}`
    }
    rango3.oninput = () => {
        texto3.innerHTML = `${rango3.value} (Meses)`
    }
}
rangosApp()

let tribu1 = document.getElementById('tribu1')
let tribu2 = document.getElementById('tribu2');

let FinanzasP = document.querySelectorAll('#user');

let miArray = [];
let userArray2 = []
const activeQuestion = () => {
    user.forEach(item => {
        miArray.push(item)
        item.addEventListener('click',(e) => {
            if(e.target.classList.contains('active')) {
                btnSubmit.addEventListener('click',(e) => {
                    resultado.innerHTML = 'Masculino'
                    e.preventDefault()
                })
            }   
            else if(e.target.classList.contains('activeTwo')) {
                btnSubmit.addEventListener('click',(e) => {
                    resultado.innerHTML = `Femenino <br>`
                    e.preventDefault()
                })
            } 
        })
    })
    user2.forEach(us => {
        userArray2.push(us);
        us.addEventListener('click',(e)=>{
            if(e.target.classList.contains('activeThree')) {
                btnSubmit.addEventListener('click',(e)=>{
                    resultado.innerHTML += `docente <br>`
                    e.preventDefault()
                })
            } else if(e.target.classList.contains('activeFive')) {
                btnSubmit.addEventListener('click',(e) => {
                    console.log('Independiente')
                    e.preventDefault()
                })
            }
        })
    })
     let containerTabla = document.querySelector('.containerTabla'); 
    btnSubmit.addEventListener('click',(e) => {
        if(tribu1.checked === true){
            tribuTb.innerHTML = tribu1.value
        } else if(tribu2.checked === true) {
            tribuTb.innerHTML = tribu2.value
        } else if(tribu1 != '' || tribu2 != '') {
            alert('Selecciona: ¿Haces parte de un tribu Fineducom?')
        }
        if(rango1.value > 4) {
            creditoTb.innerHTML = `más de ${rango1.value} créditos`

        } else {
            creditoTb.innerHTML = `${rango1.value} créditos`
        }
        containerTabla.style.display = 'block';
        e.preventDefault()
    });
}
activeQuestion()
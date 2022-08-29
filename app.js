let formularioPrincipal = document.getElementById('formMenu')
let btnSubmit = document.getElementById('btnSubmit');

let rango1 = document.getElementById('range1');
let texto1 = document.getElementById('texto1');
let rango2 = document.getElementById('range2');
let texto2 = document.getElementById('texto2');
let rango3 = document.getElementById('range3');
let texto3 = document.getElementById('texto3');
const img = document.querySelector('.img')

let creditoTb = document.getElementById('crédito');
let tableTribu = document.getElementById('tribu');
let cursosTb = document.getElementById('cursos');
let generoTb = document.getElementById('genero');
let actividadTb = document.getElementById('actividad');
let montoTb = document.getElementById('monto');
let plazoTb = document.getElementById('plazo');
let pagoTb = document.getElementById('pago');



let containerTabla = document.querySelector('.containerTabla'); 
const funcionRange = () => {
    rango1.oninput = () => {
        if(rango1.value > 4) {
            texto1.innerHTML = `${rango1.value} o más créditos`
        } else if(rango1.value <= 1) {
            texto1.innerHTML = `${rango1.value} crédito`
        } 
        else {
            texto1.innerHTML = `${rango1.value} créditos`
        }
    }
    rango2.oninput =  () => {
        texto2.innerHTML = `$ ${new Intl.NumberFormat().format(rango2.value)}`
    }
    rango3.oninput = () => {
        texto3.innerHTML = `${rango3.value} (Meses)`
    }
}
funcionRange()
const montoUser = () => {
    montoTb.innerHTML = `$ ${new Intl.NumberFormat().format(rango2.value)}`
}
const validatorMeses = () => {
    plazoTb.innerHTML = `${rango3.value} (Meses)`
}
btnSubmit.addEventListener('click', (e) => {
    const validatioRadioTribu = () => {
        var si = document.getElementById('si')
        let no = document.getElementById('no');
        if(si.checked === true) {
            tableTribu.innerHTML = si.value
        } else if(no.checked === true) {
            tableTribu.innerHTML = no.value
        } 
    }
    const validationCursos = () => {
        let noC = document.getElementById('No');
        let finanzasP = document.getElementById('fP');
        let finanzasPe = document.getElementById('fE');
        if(noC.checked === true){
            cursosTb.innerHTML = noC.value
        } else if(finanzasP.checked === true){
            cursosTb.innerHTML = 'Finanzas Personales'
        } else if(finanzasPe.checked === true){
            cursosTb.innerHTML = 'Finanzas Personales de empleo'
        }
    }
    const validatorGenero = () => {
        let masculino = document.getElementById('masculino');
        let femenino = document.getElementById('femenino');
        let intersexual = document.getElementById('intersexual');
        if(masculino.checked === true) {
            generoTb.innerHTML = masculino.value
        } else if(femenino.checked === true) {
            generoTb.innerHTML = femenino.value
        } else if(intersexual.checked === true){
            generoTb.innerHTML = intersexual.value
        } 
    }
    const validatorActivity = () => {
        let docente = document.getElementById('docente');
        let independiente = document.getElementById('independiente');
        let otro = document.getElementById('otro');
        if(docente.checked === true){
            actividadTb.innerHTML = docente.value
        } else if(independiente.checked === true){
            actividadTb.innerHTML = independiente.value
        } else if(otro.checked === true) {
            actividadTb.innerHTML = otro.value
        } 
    }
    const tiposPagos = () => {
        let mes = document.getElementById('mensuales');
        let quincenal = document.getElementById('quincenales');
        if(mes.checked === true) {
            pagoTb.innerHTML = mes.value
        } else if(quincenal.checked === true) {
            pagoTb.innerHTML = quincenal.value
        } 
    }
    if(rango1.value > 4) {
        creditoTb.innerHTML = `Más de ${rango1.value} créditos`
        
    } else if(rango1.value <= 1) {
        creditoTb.innerHTML = `${rango1.value} crédito`
    } 
    else {
        creditoTb.innerHTML = `${rango1.value} créditos`
    }
    containerTabla.style.display = 'block';
    img.style.display = 'block';
        validatioRadioTribu()
        validationCursos()
        validatorGenero()
        validatorActivity()
        montoUser()
        validatorMeses()
        tiposPagos()
        e.preventDefault()
})

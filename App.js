
const tunniplaan = new Tunniplaan('346', '2019-04-01');
const kl = new Kasutajaliides();

document.addEventListener('DOMContentLoaded', valjastatudTunniplaan);

const changeBtn = document.querySelector('#u-opetaja');
changeBtn.addEventListener('click', uusOpetaja);

function valjastatudTunniplaan(){
    tunniplaan.opetajaTunniplaaniAndmed().then(tunnid => {
        kl.printNadalakp(kl.nadalaKuupaevad(tunnid));
        kl.print(tunnid);

    }).catch(viga => console.log(viga));
}

function uusOpetaja() {
    const opetajaId = document.querySelector('#opetajaId').value;
    tunniplaan.opetaja = opetajaId;
    valjastatudTunniplaan();

}




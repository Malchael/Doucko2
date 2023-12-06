let pole = []; 
const seznam = [];

function VypisDotabulky()
{
    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    for(let i = 0; i<seznam.length; i++)
    {
        let newrow = table.insertRow(table.rows.lenght);

        let tab_jmeno = newrow.insertCell(0);
        let tab_prijmeni = newrow.insertCell(1);
        let tab_rocnik = newrow.insertCell(2);
        let tab_id = newrow.insertCell(3);

        tab_jmeno.innerHTML = seznam[i].Jmeno;
        tab_prijmeni.innerHTML = seznam[i].Prijmeni;            
        tab_rocnik.innerHTML = seznam[i].Rocnik;
        let cislo = seznam[i].Id;
        tab_id.innerHTML = cislo;         
    }
}

function Pridat()
{
    let jmeno = document.getElementById("name"); 
    let prijmeni = document.getElementById("surname");
    let rocnik = document.getElementById("rocnik");

    if ((jmeno.value != "") && (isNaN(jmeno.value)))
    {
        if ((prijmeni.value != "") && (isNaN(prijmeni.value)))
        {
            if ((rocnik.value != "") && (!isNaN(rocnik.value)) && (rocnik.value > 0) && (rocnik.value < 10))
            {
                let cislo = "";
                for (let i = 0; i < 5; i++)
                {
                    let nahodne_Cislo = Math.floor(Math.random() * 10);
                    cislo += nahodne_Cislo; 
                }

                seznam.push({Jmeno: jmeno.value ,Prijmeni: prijmeni.value,Rocnik: rocnik.value, Id: cislo});
                VypisDotabulky();
            }
            else 
            {
                alert("spatne cislo UwU");
            }
        }
        else
        {
            alert("spatne prijmeni OwO");
        }
    }
    else
    {
        alert("A mistake has happened in your name UwU");
    }
}

function odebrat()
{
    seznam.splice(document.getElementById("rem").value - 1, 1);
    VypisDotabulky();
}

function odebrat_posledni()
{
    seznam.pop();
    VypisDotabulky();
}

function odebrat_prvni()
{
    seznam.shift();
    VypisDotabulky();
}
const seznam = [
    {Jmeno: "Josef", Prijmeni: "Skudrna", Rocnik: "1."},
    {Jmeno: "Alexander", Prijmeni: "Rodriquez", Rocnik: "2."}
];

function VypisDotabulky()
{
    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    for(let i = 0; i<seznam.length; i++)
    {
        let row = table.insertRow(0);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = seznam[i].Jmeno;
        cell2.innerHTML = seznam[i].Prijmeni;            
        cell3.innerHTML = seznam[i].Rocnik;         
    }
}

function Pridat()
{
    VypisDotabulky();
}
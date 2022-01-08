const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    }
]

const noteWithCredit = notes.map(
    function(noteObject){
        return noteObject.note * noteObject.credit;
    }
)

const sumOfNotesWithCredit = noteWithCredit.reduce(
    function(valorAcumulado = 0, nuevoValor){
        return valorAcumulado += nuevoValor;
    }
)

const credit = notes.map(
    function(creditObject){
        return creditObject.credit;
    }
)

const sumOfCredit = credit.reduce(
    function(sum = 0, newVal){
        return sum += newVal;
    }
)

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredit;
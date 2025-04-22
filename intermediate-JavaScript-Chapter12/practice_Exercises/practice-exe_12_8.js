let objS = {
    name: 'Tare',
    surname: 'Abulu',
    age: 23,
    educationStatus: 'High school certificate',
    status: 'Single',
    occupation: false,
    hobby: ['Reading', 'Writing Poetry']
};

//let javaObjNota = JSON.stringify(objS);

function stringJson(a) {
    let javaObjNota = JSON.stringify(a);
    let some = JSON.parse(javaObjNota);
    console.log(javaObjNota);
    console.log(some);

    for (let infos in some) {
        console.log(infos +  " : ",some[infos]);
        // console.log(infos);
    }

}

stringJson(objS);


let myList = [{
    "name": "Learn JavaScript",
    "status": true
    },
    {
    "name": "Try JSON",
    "status": false
    }
   ];
   reloader();
   function reloader() {
        myList.forEach((el) => {
        console.log(`${el.name} = ${el.status}`);
    });
   }
   
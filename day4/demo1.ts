//json
//its store data in key and value format
let jsonObj={
    id:9,
    "fname":'Sumit',
    lname: 'Raokhande'
}
//can be accessed by 
//1.dot operator

// console.log(`
//         ID          :: ${jsonObj.id}
//         First Name  :: ${jsonObj.fname}
//         Last Name   :: ${jsonObj.lname}       
// `);

//2.square operator

// console.log(`
//         ID          :: ${jsonObj["id"]}
//         First Name  :: ${jsonObj["fname"]}
//         Last Name   :: ${jsonObj["lname"]}       
// `);

//ARRAY of object
let arrObj=[
    {
        id:1,
        "fname":'S',
        lname: 'R',
        country :{
            cid : 3,
            cname: "india"
        },
        month: ["jan","feb","mar"],
        result: [
            {
                sub: "m1",
                mark: 45
            }

        ]
    },
    {
        id:3,
        "fname":'Su',
        lname: 'Ra',
        country :{
            cid : 5,
            cname: "usa"
        },
        month: ["june","jul","aug"],
        result: [
            {
                sub: "m1",
                mark: 45
            }

        ]
    },
    {
        id:5,
        "fname":'Sum',
        lname: 'hande',
        country :{
            cid : 10,
            cname: "japamn"
        },
        month: ["oct","nov","dec"],
        result: [
            {
                sub: "m1",
                mark: 45
            }

        ]
    }
];
for(let i = 0; i < arrObj.length; i++){
    console.log(`
            ID           :: ${arrObj[i].id}
            First Name   :: ${arrObj[i].fname}
            Last Name    :: ${arrObj[i].lname}
            Country      :: ${arrObj[i].country.cname}
            CountryID    :: ${arrObj[i].country.cid}
            ------------------------
    `)

    for(let j = 0; j < arrObj[i].result.length; j++){
        console.log(`
                    Subject  :: ${arrObj[i].result[j].sub}
                    Marks    :: ${arrObj[i].result[j].mark}
                    ------------------------
        `);
    }

    arrObj[i].result.forEach(item => {
        console.log(`
                    Subject  :: ${item.sub}
                    Marks    :: ${item.mark}
                    ------------------------ 
        `)
    });
};





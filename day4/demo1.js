//json
//its store data in key and value format
var jsonObj = {
    id: 9,
    "fname": 'Sumit',
    lname: 'Raokhande'
};
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
var arrObj = [
    {
        id: 1,
        "fname": 'S',
        lname: 'R',
        country: {
            cid: 3,
            cname: "india"
        },
        month: ["jan", "feb", "mar"],
        result: [
            {
                sub: "m1",
                mark: 45
            }
        ]
    },
    {
        id: 3,
        "fname": 'Su',
        lname: 'Ra',
        country: {
            cid: 5,
            cname: "usa"
        },
        month: ["june", "jul", "aug"],
        result: [
            {
                sub: "m1",
                mark: 45
            }
        ]
    },
    {
        id: 5,
        "fname": 'Sum',
        lname: 'hande',
        country: {
            cid: 10,
            cname: "japamn"
        },
        month: ["oct", "nov", "dec"],
        result: [
            {
                sub: "m1",
                mark: 45
            }
        ]
    }
];
for (var i = 0; i < arrObj.length; i++) {
    console.log("\n            ID           :: ".concat(arrObj[i].id, "\n            First Name   :: ").concat(arrObj[i].fname, "\n            Last Name    :: ").concat(arrObj[i].lname, "\n            Country      :: ").concat(arrObj[i].country.cname, "\n            CountryID    :: ").concat(arrObj[i].country.cid, "\n            ------------------------\n    "));
    for (var j = 0; j < arrObj[i].result.length; j++) {
        console.log("\n                    Subject  :: ".concat(arrObj[i].result[j].sub, "\n                    Marks    :: ").concat(arrObj[i].result[j].mark, "\n                    ------------------------\n        "));
    }
    arrObj[i].result.forEach(function (item) {
        console.log("\n                    Subject  :: ".concat(item.sub, "\n                    Marks    :: ").concat(item.mark, "\n                    ------------------------ \n        "));
    });
}
;

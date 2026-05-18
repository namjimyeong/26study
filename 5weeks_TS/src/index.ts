// type Product={
//     id: number;
//     name: string;
//     price: number;
//     isSoldOut: boolean;
// };

// let product1:Product={
//     id: 1,
//     name:"bread",
//     price: 1000,
//     isSoldOut: true,
// };

// console.log(product1);

// let loginUser: string|null=null;
// console.log(loginUser);
// loginUser="Kim";
// console.log(loginUser);

// let orderStatus: "ready"|"shipping"|"done";

// orderStatus="ready";
// console.log(orderStatus);

// orderStatus="shipping";
// console.log(orderStatus);

// orderStatus="done";
// console.log(orderStatus);

// let score: number[]=[1, 2, 3];
// console.log(score);

// function getNum(a: number, b: number, c: number): number{
//     return (a>b? a: (b>c? b: c))+(a<b? a: (b<c? b: c))
// }

// console.log(getNum(1, 2, 3));

type User={
    id: number;
    name: string;
    email?: string;
};

let users: User[]=[
    {
        id: 1,
        name: "Nam",
        email: "nam",
    },
    {
        id: 2,
        name: "Jimyeong",
    },
    {
        id: 2,
        name: "Kim",
        email: "nam",
    },
];

type check=(list:User[])=>void;

const duplicate: check=list=>{
    
    for (let i=0; i<list.length; i++) {

        for (let j=i+1; j<list.length; j++) {

            if(list[i].id===list[j].id) {
                console.log("id중복 : "+list[i].id);
            }

            if(list[i].email===undefined||list[j].email===undefined) {
            }

            else {

                if(list[i].email===list[j].email) {
                console.log("email중복 : "+list[i].email);
            }

            }
        }
    }
}

console.log(duplicate(users));
{
    type User1 = {
        id:number;
        name: string;
    }

    interface User2{
        id: number;
        name: string;
    }

    //Add 1 Property
    type User3 = User1 & {email: string}

    interface User4 extends User2{
        email: string;
        age: number;
    }

    const person1 : User3={
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com"
    }
    const person2: User4 = {
        id: 2,
        name: "Jane Doe",
        email: "janedoe@example.com",
        age: 30
    }
    console.log(person1);
    console.log(person2);

}
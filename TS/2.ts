{
    //Generic

    type GenericArray<T> = Array<T>
    type GenericTuple<T1, T2> = [T1, T2]

    const x1:GenericArray<number> = [1,2,3]
    const x2: GenericArray<string> = ['a', 'b', 'c']
    const x3:GenericArray<boolean> = [true,false,true]

    //Array of Object
    type Obj1 = {
        name: string;
        age: number;
        email: string;
    }

    const person:GenericArray<Obj1> = [
        {
            name: 'John Doe',
            age: 30,
            email: 'johndoe@example.com'
        },
        {
            name: 'Janie',
            age: 28,
            email: 'janiedoe@example.com'
        }
    ]
    console.log(person)

    const y1 : GenericTuple<string,number> = ["King",1]
    const y2 : GenericTuple<string,boolean> = ["Queen",true]
    const y3: GenericTuple<string,object> = ["Samio", {
        name: 'John Doe',
        age: 30,
        email: 'johndoe@example.com'
    }]
    console.log(y1,y2,y3)
}
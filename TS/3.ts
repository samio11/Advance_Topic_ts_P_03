{
    interface Developer<T>
    {
        name: string;
        age: number;
        computer: T
    }
    type Computer = {
        brand: string;
        model: string;
        ram: number;
    }

    type CompanyInf0 = Computer & {motherBoard : string;CPU:{GPU:string;UP:string}}
    const developer1 : Developer<CompanyInf0> = {
        name: 'John Doe',
        age: 30,
        computer: {
            brand: 'Apple',
            model: 'MacBook Pro',
            ram: 16,
            motherBoard: 'Intel Iris Plus',
            CPU: {
                GPU: 'Nvidia GeForce GTX 1660',
                UP: '2.6GHz'
            }
        }
    }
    console.log(developer1);
}
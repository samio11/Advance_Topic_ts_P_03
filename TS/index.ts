{
    const roll: number = 13;
    console.log(roll)

    //Type Assertion
    let anything: any;
    anything = 42;
    anything = 'samio';
    (anything as string)

    const gmToKG = (value: string | number = 300): string | number | undefined => {
        if (typeof value === 'number') {
            console.log('Number')
            return value / 1000;
        }
        else if (typeof value === 'string') {
            console.log('string')
            return parseFloat(value) / 1000;
        }
        else return undefined;
    }
    console.log(gmToKG('500'))
    console.log(gmToKG('5300000'))
    const x1 = (gmToKG('5000') as number)
    console.log(typeof x1, x1)








}
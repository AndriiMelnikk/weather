import React, { FC, ReactNode, useState } from 'react';
// import { setInterval } from 'timers/promises';

interface Props {
    number: number;
    children: ReactNode;
    initState?: number
}

const RunNumber: FC<Props> = ({ number, children, initState = 1 }) => {

    const [run, setRun] = useState(initState);

    console.log(run)

    // setTimeout(()=>{

    //     console.log(run)

    //         // setRun(prev => prev++)
        

    // },1000);

    console.log('render')

    return <>{run}</>;
};

export default RunNumber;

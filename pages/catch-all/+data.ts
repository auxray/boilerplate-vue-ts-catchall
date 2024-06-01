export { data }
export type Data = Awaited<ReturnType<typeof data>>

import type { PageContextServer } from 'vike/types'

const data = async (pageContext: PageContextServer) => {
    const randNum = getRandomInt(50);

    console.log(`+data newRand=${randNum}`);

    return {
        randNum,
        title: `${randNum}`
    }
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

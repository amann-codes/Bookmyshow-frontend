import { Box } from "./Box"

export function Trending({title}){
    return (
        <div className="max-w-[1240px] w-11/12 h-[400px] mx-auto my-8">
            <div className="text-2xl font-bold mb-4">{title}</div>
            <div className="flex flex-wrap justify-start m-2">
                <Box about1={"Despicable Me 4"} about2={'Movies'}/>
                <Box about1={"Deadpool & Wolverine"} about2={'Movies'}/>
                <Box about1={"Karan Aujhla - It Was All A Dream"} about2={'Events'}/>
                <Box about1={"Sunburn Arena feat. Alan Walker"} about2={'Events'}/>
                <Box about1={"Kalki 2898D"} about2={'Movies'}/>
                <Box about1={"Dhanji-BARGAM Tour"} about2={'Events'}/>
                <Box about1={"Kill"} about2={'Movies'}/>
                <Box about1={"Despicable Me 4"} about2={'Movies'}/>
                <Box about1={"Deadpool & Wolverine"} about2={'Movies'}/>
                <Box about1={"Karan Aujhla - It Was All A Dream"} about2={'Events'}/>
                <Box about1={"Sunburn Arena feat. Alan Walker"} about2={'Events'}/>
                <Box about1={"Sarfira"} about2={'Movies'}/>
                <Box about1={"Karan Aujhla - It Was All A Dream"} about2={'Events'}/>
            </div>
        </div>
    )
}
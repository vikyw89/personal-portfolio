"use client"

const name = `VIKY`
const arr = new Array(50).fill('VIKY', 0, 50)
const introduction = `Web Developer`
export const IntroductionComponent = () => {
    return (
        <div className="z-10 text-base-content flex flex-col items-center bg-transparent">
            <h1 className="font-mono">
            </h1>
            <h1 className="font-mono bg-primary text-primary-content w-full font-bold text-3xl p-3">
            profile
            </h1>
        </div>
    )
}
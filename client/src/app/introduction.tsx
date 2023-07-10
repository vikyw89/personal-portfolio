"use client"

const introduction = `Hey there! I'm Viky, a former architectural engineer turned fullstack developer. With a decade of experience in architecture, I've honed my skills in problem-solving, attention to detail, and creative thinking. Now, I'm excited to bring my expertise to software development. Let's team up and create something amazing!`
export const IntroductionComponent = () => {
    return (
        <p className="z-10 p-10 text-base-content backdrop-blur-sm">
            {introduction}
        </p>
    )
}
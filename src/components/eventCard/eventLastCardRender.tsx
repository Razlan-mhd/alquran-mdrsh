import EventLastCard from "./eventLastCard";

const EventLastCardRender= () => {
    return (
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto ">
            <EventLastCard
                imageSrc="/Event/speaker-1.jpg" 
                text1="speaker"
                text2="hello"
                heading="Abdulllah Habib"
                label="Speaker"
                price="join" />

                 <EventLastCard
                imageSrc="/Event/speaker-2.jpg" 
                text1="speaker"
                text2="hello"
                heading="Abdulllah Habib"
                label="Speaker"
                price="join" />

                 <EventLastCard
                imageSrc="/Event/organiser.webp" 
                text1="speaker"
                text2="hello"
                heading="Abdulllah Habib"
                label="Speaker"
                price="join" />

        </div>
    )
}
export default EventLastCardRender;
import EventCard from "./eventCard";

const EventCardRender = () => {
    return(
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto ">
            <EventCard
                imageSrc="/Event/event-1.webp"
                text1="10:00 pm - 11:45 pm"
                text2="Fiolveien 230, Norway"
                heading="Learning Quranic Arabic For Beginners"
                label="Upcoming Evint Price"
                price="$12.00"
            />
            <EventCard
                imageSrc="/Event/event-2.jpg"
                text1="10:00 pm - 11:45 pm"
                text2="Fiolveien 230, Norway"
                heading="Learning Quranic Arabic For Beginners"
                label="Upcoming Evint Price"
                price="$12.00"
            />
             <EventCard
                imageSrc="/Event/event-3.webp"
                text1="10:00 pm - 11:45 pm"
                text2="Fiolveien 230, Norway"
                heading="Learning Quranic Arabic For Beginners"
                label="Upcoming Evint Price"
                price="$12.00"
            />
             <EventCard
                imageSrc="/Event/event-4.webp"
                text1="10:00 pm - 11:45 pm"
                text2="Fiolveien 230, Norway"
                heading="Learning Quranic Arabic For Beginners"
                label="Upcoming Evint Price"
                price="$12.00"
            />
             <EventCard
                imageSrc="/Event/event-5.webp"
                text1="10:00 pm - 11:45 pm"
                text2="Fiolveien 230, Norway"
                heading="Learning Quranic Arabic For Beginners"
                label="Upcoming Evint Price"
                price="$12.00"
            />
             <EventCard
                imageSrc="/Event/event-6.webp"
                text1="10:00 pm - 11:45 pm"
                text2="Fiolveien 230, Norway"
                heading="Learning Quranic Arabic For Beginners"
                label="Upcoming Evint Price"
                price="$12.00"
            />
        </div>
    )
}

export default EventCardRender;
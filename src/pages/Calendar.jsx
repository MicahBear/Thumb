import { createRef, useState } from "react";
// import veggie from "../../data/veggie";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
// import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { DateTime } from "luxon";


export default function Calendar() {
  let calendarRef= createRef()
  const [title, setTitle] = useState('');
  const [events, setEvents] = useState([]);
  const [dateInfo,setDateInfo]=useState()
  const [isModalOpen,setIsModalOpen]= useState(false)

 
  const frostDate = "2023-04-11";
  console.log(frostDate);
  let dt = DateTime.fromObject({ year: 2023, month: 4, day: 11 })
    .minus({ days: 75 })
    .toISODate();
  // dt.minus({ days: 35 });
  // console.log(dt, "check");
  // const [modal, setModal] = useState(false)

  //!user hits div and triggers this function
  const handleDateClick = (x) => {
    setDateInfo(x)
    setIsModalOpen(true);
    }
    
    // const calendarApi = selected.view.calendar;
    // calendarApi.unselected();

    // if (title) {
    //   calendarApi.addEvent({
    //     id: `${selected.dateStr}-${title}`,
    //     title,
    //     start: selected.startStr,
    //     end: selected.endStr,
    //     allDay: selected.allDay,
    //   });
    // }
  // };
  const handleModalClose=()=>{
    setIsModalOpen(false)
  }
   const handleInputChange=(event)=> {
    console.log(event.target.value)
    setTitle(event.target.value);
  }
  const handleFormSubmit=(selected)=>{
    selected.preventDefault()
    // selected.stopPropagation()
    // event.preventDefault()
    console.log('event: ',selected.event)
     const calendarApi = calendarRef.current.getApi();
    // calendarApi.unselected();
    console.log('calendar: ', calendarApi)

    if (title) {
      // calendarApi.addEvent({
      //   id: `${title}`,
      //   title,
      //   start: calendarApi.currentDate,
      //   // end: selected.endStr,
      //   allDay: true,
      // });
      const e =
      {id: `${title}`,
        title,
        start: dateInfo.start,
        // end: selected.endStr,
        allDay: true,
    }
    setEvents([...events, e])
      // })
    }
    // setCurrentEvents([...events,eventToAdd])
    setIsModalOpen(false)
  }

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <div className="calendar--container">
      <FullCalendar
        height="45vh"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "timeGridWeek,timeGridDay",
        }}
        ref={calendarRef}
        initialView="dayGridWeek"
        editable={true}
        selectable={true}
        dayMaxEvent={true}
        select={handleDateClick}
        eventClick={handleEventClick}
        events={events}
        // initialEvents={[
        //   { id: "1ss", title: "seed spinach", date: dt },
        //   { id: "2sla", title: "seed lettuce", date: "2023-02-06" },
        //   { id: "3hka", title: "harvest kale", date: "2023-02-10" },
        //   { id: "1tl", title: "transplant lettuce", date: "2023-02-04" },
        //   { id: "2slb", title: "seed lettuce", date: "2023-02-02" },
        //   { id: "3hkb", title: "harvest kale", date: "2023-01-30" },
        // ]}
      />
    
  {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>

            <form onSubmit={handleFormSubmit}>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={handleInputChange}
              />

              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      )}
      {/* <List>
        {currentEvents.map((event) => (
          <ListItem
            key={event.id}
            sx={{
              margin: "10px 0",
              borderRadius: "2px",
            }}
          >
            <ListItemText
              primary={event.title}
              secondary={
                <Typography>
                  {formatDate(event.start, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List> */}
    </div>
  );
}

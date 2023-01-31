import { useState } from "react";
// import veggie from "../../data/veggie";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
// import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { DateTime } from "luxon";

export default function Calendar() {
  const frostDate = "2023-04-11";
  console.log(frostDate);
  let dt = DateTime.fromObject({ year: 2023, month: 4, day: 11 })
    .minus({ days: 75 })
    .toISODate();
  // dt.minus({ days: 35 });
  console.log(dt, "check");
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("please enter new title for event");
    const calendarApi = selected.veiew.calendar;
    calendarApi.unselected();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
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
        initialView="dayGridWeek"
        editable={true}
        selectable={true}
        dayMaxEvent={true}
        select={handleDateClick}
        eventClick={handleEventClick}
        eventsSet={(events) => setCurrentEvents(events)}
        initialEvents={[
          { id: "1ss", title: "seed spinach", date: dt },
          { id: "2sla", title: "seed lettuce", date: "2023-02-06" },
          { id: "3hka", title: "harvest kale", date: "2023-02-10" },
          { id: "1tl", title: "transplant lettuce", date: "2023-02-04" },
          { id: "2slb", title: "seed lettuce", date: "2023-02-02" },
          { id: "3hkb", title: "harvest kale", date: "2023-01-30" },
        ]}
      />
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

import { formatDate } from "@fullcalendar/core";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { useState } from "react";

export default function Schedule() {
  const [currentEvents, setCurrentEvents] = useState([
    { id: "2sla", title: "seed lettuce", date: "2023-02-06" },
    { id: "3hka", title: "harvest kale", date: "2023-02-10" },
    { id: "1tl", title: "transplant lettuce", date: "2023-02-04" },
    { id: "2slb", title: "seed lettuce", date: "2023-02-02" },
    { id: "3hkb", title: "harvest kale", date: "2023-01-30" },
  ]);
  return (
    <List className="pt-0 mt-0">
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
    </List>
  );
}

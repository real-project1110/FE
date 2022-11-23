import React from "react";
import styled from "styled-components";
import { Eventcalendar, snackbar, setOptions, Popup, Button, Input, Textarea, Datepicker } from "@mobiscroll/react";

import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import "./schedule.css";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { addSchedule, editSchedule, readSchedule, removeSchedule } from "../../apis/scheduleApi";

setOptions({
  theme: "ios",
  themeVariant: "light",
});

const now = new Date();

const defaultEvents = []; // get 요청한값 받아오기

const viewSettings = {
  calendar: { labels: true },
};
const responsivePopup = {
  medium: {
    display: "anchored",
    width: 400,
    fullScreen: false,
    touchUi: false,
  },
};
const colorPopup = {
  medium: {
    display: "anchored",
    touchUi: false,
    buttons: [],
  },
};
const colors = ["#ffeb3c", "#ff9900", "#f44437", "#ea1e63", "#9c26b0", "#3f51b5", "", "#009788", "#4baf4f", "#7e5d4e"];

const Schedular = () => {
  const [myEvents, setMyEvents] = useState(defaultEvents || []);
  const [tempEvent, setTempEvent] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const [start, startRef] = useState(null);
  const [end, endRef] = useState(null);
  const [popupEventTitle, setTitle] = useState("");
  const [popupEventDescription, setDescription] = useState("");
  const [popupEventDate, setDate] = useState([]);
  const [mySelectedDate, setSelectedDate] = useState(now);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [colorAnchor, setColorAnchor] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [tempColor, setTempColor] = useState("");
  const colorPicker = useRef();

  const { isLoading, isError, data, error, refetch } = useQuery(["schedules", 1], () => readSchedule(1), {
    refetchOnWindowFocus: false,
    retry: 1,
    onSuccess: (data) => {
      setMyEvents(data);
    },
    onError: (e) => {
      alert(e.message);
    },
  });
  const { mutate: addMutate } = useMutation(addSchedule, {
    onSuccess: () => refetch(),
  });
  const { mutate: editMutate } = useMutation(editSchedule, {
    onSuccess: () => refetch(),
  });

  const { mutate: removeMutate } = useMutation(removeSchedule, {
    onSuccess: () => refetch(),
  });

  const colorButtons = useMemo(
    () => [
      "cancel",
      {
        text: "Set",
        keyCode: "enter",
        handler: () => {
          setSelectedColor(tempColor);
          setColorPickerOpen(false);
        },
        cssClass: "mbsc-popup-button-primary",
      },
    ],
    [tempColor]
  );

  const saveEvent = useCallback(() => {
    const newEvent = {
      title: popupEventTitle,
      description: popupEventDescription,
      start: popupEventDate[0],
      end: popupEventDate[1],
      color: selectedColor,
      groupId: 1,
      groupUserId: 1,
    };

    if (isEdit) {
      const index = myEvents.findIndex((x) => x.id === tempEvent.id);
      const newEventList = [...myEvents];
      newEventList.splice(index, 1, newEvent);
      setMyEvents(newEventList);
      const scheduleId = tempEvent.scheduleId;
      const { title, description, start, end, color, groupId, groupUserId } = newEvent;
      const editEvent = { id: scheduleId, body: { title, description, start, end, color, groupId, groupUserId } };
      editMutate(editEvent);
    } else {
      setMyEvents([...myEvents, newEvent]);
      // groupUserId는 나중에 빼기
      const { title, description, start, end, color, groupId, groupUserId } = newEvent;
      const addEvent = { id: groupId, body: { title, description, start, end, color, groupUserId } };
      addMutate(addEvent);
    }
    setSelectedDate(popupEventDate[0]);
    setOpen(false);
  }, [isEdit, myEvents, popupEventDate, popupEventDescription, popupEventTitle, tempEvent, selectedColor, addMutate, editMutate]);

  const deleteEvent = useCallback(
    (event) => {
      removeMutate(event.scheduleId);
      setMyEvents(myEvents.filter((item) => item.id !== event.id));
      setTimeout(() => {
        snackbar({
          button: {
            action: () => {
              setMyEvents((prevEvents) => [...prevEvents, event]);
            },
            text: "Undo",
          },
          message: "Event deleted",
        });
      });
    },
    [myEvents, removeMutate]
  );

  const loadPopupForm = useCallback((event) => {
    setTitle(event.title);
    setDescription(event.description);
    setDate([event.start, event.end]);
    setSelectedColor(event.color || "");
  }, []);

  // handle popup form changes

  const titleChange = useCallback((ev) => {
    setTitle(ev.target.value);
  }, []);

  const descriptionChange = useCallback((ev) => {
    setDescription(ev.target.value);
  }, []);

  const dateChange = useCallback((args) => {
    setDate(args.value);
  }, []);

  const onDeleteClick = useCallback(() => {
    deleteEvent(tempEvent);
    setOpen(false);
  }, [deleteEvent, tempEvent]);

  // scheduler options

  const onSelectedDateChange = useCallback((event) => {
    setSelectedDate(event.date);
  }, []);

  const onEventClick = useCallback(
    (args) => {
      setEdit(true);
      setTempEvent({ ...args.event });
      // fill popup form with event data
      loadPopupForm(args.event);
      setAnchor(args.domEvent.target);
      setOpen(true);
    },
    [loadPopupForm]
  );

  const onEventCreated = useCallback(
    (args) => {
      // createNewEvent(args.event, args.target)
      setEdit(false);
      setTempEvent(args.event);
      // fill popup form with event data
      loadPopupForm(args.event);
      setAnchor(args.target);
      // open the popup
      setOpen(true);
    },
    [loadPopupForm]
  );

  const onEventDeleted = useCallback(
    (args) => {
      deleteEvent(args.event);
    },
    [deleteEvent]
  );

  const onEventUpdated = useCallback(
    (args) => {
      // 드래그앤 드롭, 리사이징 수정부분 api 요청
      const { scheduleId, title, description, start, end, color, groupId, groupUserId } = args.event;
      const editEvent = { id: scheduleId, body: { title, description, start, end, color, groupId, groupUserId } };
      editMutate(editEvent);
    },
    [editMutate]
  );

  // popup options
  const headerText = useMemo(() => (isEdit ? "Edit event" : "New Event"), [isEdit]);
  const popupButtons = useMemo(() => {
    if (isEdit) {
      return [
        "cancel",
        {
          handler: () => {
            saveEvent();
          },
          keyCode: "enter",
          text: "Save",
          cssClass: "mbsc-popup-button-primary",
        },
      ];
    } else {
      return [
        "cancel",
        {
          handler: () => {
            saveEvent();
          },
          keyCode: "enter",
          text: "Add",
          cssClass: "mbsc-popup-button-primary",
        },
      ];
    }
  }, [isEdit, saveEvent]);

  const onClose = useCallback(() => {
    if (!isEdit) {
      // refresh the list, if add popup was canceled, to remove the temporary event
      setMyEvents([...myEvents]);
    }
    setOpen(false);
    setColorPickerOpen(false);
  }, [isEdit, myEvents]);

  const selectColor = useCallback((color) => {
    setTempColor(color);
  }, []);

  const openColorPicker = useCallback(
    (ev) => {
      selectColor(selectedColor || "");
      setColorAnchor(ev.currentTarget);
      setColorPickerOpen(true);
    },
    [selectColor, selectedColor]
  );

  const changeColor = useCallback(
    (ev) => {
      const color = ev.currentTarget.getAttribute("data-value");
      selectColor(color);
      if (!colorPicker.current.s.buttons.length) {
        setSelectedColor(color);
        setColorPickerOpen(false);
      }
    },
    [selectColor, setSelectedColor]
  );

  return (
    <Wrapper>
      <Eventcalendar
        view={viewSettings}
        data={myEvents}
        clickToCreate="single"
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        selectedDate={mySelectedDate}
        onSelectedDateChange={onSelectedDateChange}
        onEventClick={onEventClick}
        onEventCreated={onEventCreated}
        onEventDeleted={onEventDeleted}
        onEventUpdated={onEventUpdated}
      />
      <Popup
        display="bottom"
        fullScreen={true}
        contentPadding={false}
        headerText={headerText}
        anchor={anchor}
        buttons={popupButtons}
        isOpen={isOpen}
        onClose={onClose}
        responsive={responsivePopup}
      >
        <div className="mbsc-form-group">
          <Input label="Title" value={popupEventTitle} onChange={titleChange} />
          <Textarea label="Description" value={popupEventDescription} onChange={descriptionChange} />
        </div>
        <div className="mbsc-form-group">
          <Input ref={startRef} label="Starts" />
          <Input ref={endRef} label="Ends" />
          <Datepicker select="range" touchUi={true} startInput={start} endInput={end} showRangeLabels={false} onChange={dateChange} value={popupEventDate} />
          <div onClick={openColorPicker} className="event-color-c">
            <div className="event-color-label">Color</div>
            <div className="event-color" style={{ background: selectedColor }}></div>
          </div>
          {isEdit ? (
            <div className="mbsc-button-group">
              <Button className="mbsc-button-block" color="danger" variant="outline" onClick={onDeleteClick}>
                일정 삭제하기
              </Button>
            </div>
          ) : null}
        </div>
      </Popup>
      <Popup
        display="bottom"
        contentPadding={false}
        showArrow={false}
        showOverlay={false}
        anchor={colorAnchor}
        isOpen={colorPickerOpen}
        buttons={colorButtons}
        responsive={colorPopup}
        ref={colorPicker}
      >
        <div className="crud-color-row">
          {colors.map((color, index) => {
            if (index < 5) {
              return (
                <div key={index} onClick={changeColor} className={"crud-color-c " + (tempColor === color ? "selected" : "")} data-value={color}>
                  <div className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style={{ background: color }}></div>
                </div>
              );
            } else return null;
          })}
        </div>
        <div className="crud-color-row">
          {colors.map((color, index) => {
            if (index >= 5) {
              return (
                <div key={index} onClick={changeColor} className={"crud-color-c " + (tempColor === color ? "selected" : "")} data-value={color}>
                  <div className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style={{ background: color }}></div>
                </div>
              );
            } else return null;
          })}
        </div>
      </Popup>
    </Wrapper>
  );
};

export default Schedular;

const Wrapper = styled.div`
  height: 91%;
`;

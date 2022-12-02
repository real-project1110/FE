import React from "react";
import {
  Eventcalendar,
  snackbar,
  setOptions,
  Popup,
  Button,
  Input,
  Textarea,
  Datepicker,
} from "@mobiscroll/react";
import { useState, useCallback, useMemo, useRef } from "react";
import "./schedule.css";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { useMutation, useQuery } from "react-query";
import {
  addSchedule,
  DragResizeSchedule,
  editSchedule,
  readSchedule,
  removeSchedule,
} from "../../apis/scheduleApi";
import { useParams } from "react-router-dom";
import { Wrapper } from "./styles";
import { useRecoilValue } from "recoil";
import { nowColor } from "../../recoil/ColorAtom";

setOptions({
  theme: "ios",
  themeVariant: "light",
});

const now = new Date();

const defaultEvents = [];

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

const Schedular = () => {
  const existColors = useRecoilValue(nowColor);
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
  const [addTitle, setAddTitle] = useState("");
  const colorPicker = useRef();
  const { groupId } = useParams();

  const colors = useMemo(() => {
    return existColors?.map((color) => color.color);
  }, [existColors]);

  const { refetch } = useQuery(
    ["schedules", groupId],
    () => readSchedule(groupId),
    {
      refetchOnWindowFocus: false,
      retry: 1,
      onSuccess: (data) => {
        setMyEvents(data);
      },
      onError: (e) => {
        alert(e.message);
      },
    }
  );

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
      title: isEdit ? popupEventTitle : addTitle,
      description: popupEventDescription,
      start: popupEventDate[0],
      end: popupEventDate[1],
      color: selectedColor,
    };

    if (isEdit) {
      const index = myEvents.findIndex((x) => x.id === tempEvent.id);
      const newEventList = [...myEvents];
      newEventList.splice(index, 1, newEvent);
      setMyEvents(newEventList);
      const scheduleId = tempEvent.scheduleId;
      const { title, description, start, end, color } = newEvent;
      const editEvent = {
        scheduleId,
        groupId,
        body: { title, description, start, end, color },
      };
      if (title === "") return alert("이름을 작성해주세요");
      if (description === undefined) return alert("내용을 작성해주세요");
      if (color === "") return alert("색상을 지정해주세요");
      editMutate(editEvent);
    } else {
      setMyEvents([...myEvents, newEvent]);
      const { title, description, start, end, color } = newEvent;
      const addEvent = {
        groupId,
        body: { title, description, start, end, color },
      };
      console.log(color);
      if (title === "") return alert("이름을 작성해주세요");
      if (description === undefined) return alert("내용을 작성해주세요");
      if (color === "") return alert("색상을 지정해주세요");
      addMutate(addEvent);
      setAddTitle("");
    }
    setSelectedDate(popupEventDate[0]);
    setOpen(false);
  }, [
    isEdit,
    myEvents,
    popupEventDate,
    popupEventDescription,
    popupEventTitle,
    tempEvent,
    selectedColor,
    addMutate,
    editMutate,
    groupId,
    addTitle,
  ]);

  const deleteEvent = useCallback(
    (event) => {
      const removeSchedule = {
        groupId: groupId,
        scheduleId: event.scheduleId,
      };
      removeMutate(removeSchedule);
      setMyEvents(myEvents.filter((item) => item.id !== event.id));
      setTimeout(() => {
        snackbar({
          button: {
            action: () => {
              setMyEvents((prevEvents) => [...prevEvents, event]);
            },
            text: "되돌리기",
          },
          message: "일정이 삭제되었습니다.",
        });
      });
    },
    [myEvents, removeMutate, groupId]
  );

  const loadPopupForm = useCallback((event) => {
    setTitle(event.title);
    setDescription(event.description);
    setDate([event.start, event.end]);
    setSelectedColor(event.color || "");
  }, []);

  // handle popup form changes

  const titleChange = useCallback(
    (ev) => {
      if (isEdit) {
        setTitle(ev.target.value);
      } else {
        setAddTitle(ev.target.value);
      }
    },
    [isEdit]
  );

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

  const onEventUpdated = useCallback((args) => {
    // 드래그앤 드롭, 리사이징 수정부분 api 요청
    const { scheduleId, title, description, start, end, color, groupId } =
      args.event;
    const editEvent = {
      scheduleId,
      groupId,
      body: { title, description, start, end, color },
    };
    DragResizeSchedule(editEvent);
  }, []);

  // popup options
  const headerText = useMemo(
    () => (isEdit ? "일정 수정" : "일정 추가"),
    [isEdit]
  );
  const popupButtons = useMemo(() => {
    if (isEdit) {
      return [
        "cancel",
        {
          handler: () => {
            saveEvent();
          },
          keyCode: "enter",
          text: "저장",
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
          text: "저장",
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
          <Input
            label="이름"
            value={isEdit ? popupEventTitle : addTitle}
            onChange={titleChange}
            required="required"
          />
          <Textarea
            label="상세 내용"
            value={popupEventDescription}
            onChange={descriptionChange}
            required="required"
          />
        </div>
        <div className="mbsc-form-group">
          <Input ref={startRef} label="시작 날짜" />
          <Input ref={endRef} label="종료 날짜" />
          <Datepicker
            select="range"
            touchUi={true}
            startInput={start}
            endInput={end}
            showRangeLabels={false}
            onChange={dateChange}
            value={popupEventDate}
          />
          <div onClick={openColorPicker} className="event-color-c">
            <div className="event-color-label">Color</div>
            <div
              className="event-color"
              style={{ background: selectedColor }}
            ></div>
          </div>
          {isEdit ? (
            <div className="mbsc-button-group">
              <Button
                className="mbsc-button-block"
                color="danger"
                variant="outline"
                onClick={onDeleteClick}
              >
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
          {colors?.map((color, index) => {
            if (index < 5) {
              return (
                <div
                  key={index}
                  onClick={changeColor}
                  className={
                    "crud-color-c " + (tempColor === color ? "selected" : "")
                  }
                  data-value={color}
                >
                  <div
                    className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check"
                    style={{ background: color }}
                  ></div>
                </div>
              );
            } else return null;
          })}
        </div>
        <div className="crud-color-row">
          {colors?.map((color, index) => {
            if (index >= 5) {
              return (
                <div
                  key={index}
                  onClick={changeColor}
                  className={
                    "crud-color-c " + (tempColor === color ? "selected" : "")
                  }
                  data-value={color}
                >
                  <div
                    className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check"
                    style={{ background: color }}
                  ></div>
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

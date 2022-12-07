import React from "react";
import {
  Eventcalendar,
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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import { groupUserAtom } from "../../recoil/userAtoms";

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
  const groupUser = useRecoilValue(groupUserAtom);
  const { groupId } = useParams();

  // 고를 수 있는 색상
  const colors = useMemo(() => {
    return existColors?.map((color) => color.color);
  }, [existColors]);

  // 스케쥴을 가져오는 요청
  const { data, refetch } = useQuery(
    ["schedules", groupId],
    () => readSchedule(groupId),
    {
      refetchOnWindowFocus: false,
      retry: 1,
      onSuccess: (data) => {
        setMyEvents(
          data.map((schedule) => {
            return {
              ...schedule,
              start: new Date(+schedule.start),
              end: new Date(+schedule.end),
            };
          })
        );
      },
      onError: (e) => {
        toast.error(e.message, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      },
    }
  );

  // 스케쥴을 추가하는 요청
  const { mutate: addMutate } = useMutation(addSchedule, {
    onSuccess: () => refetch(),
  });

  // 스케쥴을 변경하는 요청
  const { mutate: editMutate } = useMutation(editSchedule, {
    onSuccess: () => refetch(),
  });

  // 스케쥴을 삭제하는 요청
  const { mutate: removeMutate } = useMutation(removeSchedule, {
    onSuccess: () => refetch(),
  });

  // 일정에서 선택할 수 있는 색상
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

  // 스케쥴을 등록하거나 수정할 때 발생하는 함수
  const saveEvent = useCallback(() => {
    const startDate = popupEventDate[0];
    const endDate = popupEventDate[1];
    const newEvent = {
      title: isEdit ? popupEventTitle : addTitle,
      description: popupEventDescription,
      start: Date.parse(startDate),
      end: Date.parse(endDate),
      color: selectedColor,
    };

    // 일정 수정일 경우 실행
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
      if (title === "")
        return toast.error("이름을 작성해주세요", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      if (description === undefined)
        return toast.error("내용을 작성해주세요", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      if (color === "gray")
        return toast.error("색상을 지정해주세요", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      editMutate(editEvent);
      // 일정 등록일 경우 실행
    } else {
      setMyEvents([...myEvents, newEvent]);
      const { title, description, start, end, color } = newEvent;
      const addEvent = {
        groupId,
        body: { title, description, start, end, color },
      };
      if (title === "")
        return toast.error("이름을 작성해주세요", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      if (description === undefined)
        return toast.error("내용을 작성해주세요", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      if (color === "gray")
        return toast.error("색상을 지정해주세요", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
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

  // 스케쥴을 삭제할 때 발생하는 함수
  const deleteEvent = useCallback(
    (event) => {
      const removeSchedule = {
        groupId: groupId,
        scheduleId: event.scheduleId,
      };
      removeMutate(removeSchedule);
      setMyEvents(myEvents.filter((item) => item.id !== event.id));
    },
    [myEvents, removeMutate, groupId]
  );

  // 일정 등록 / 수정 창에서 나오는 기본 값들
  const loadPopupForm = useCallback((event) => {
    setTitle(event.title);
    setDescription(event.description);
    setDate([event.start, event.end]);
    setSelectedColor(event.color || "gray");
  }, []);

  // handle popup form changes

  // 일정 타이틀 onChange 함수
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

  // 일정 내용 onChange 함수
  const descriptionChange = useCallback((ev) => {
    setDescription(ev.target.value);
  }, []);

  // 일정 날짜 onChange 함수
  const dateChange = useCallback((args) => {
    setDate(args.value);
  }, []);

  // 삭제 버튼을 클릭했을 때 실행하는 함수
  const onDeleteClick = useCallback(() => {
    deleteEvent(tempEvent);
    setOpen(false);
  }, [deleteEvent, tempEvent]);

  // ??
  const onSelectedDateChange = useCallback((event) => {
    setSelectedDate(event.date);
  }, []);

  // 생성되어 있는 스케쥴을 클릭하였을 때 실행되는 함수
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

  // 일정을 생성하기 위해 빈 공간을 클릭하였을 때 실행되는 함수
  const onEventCreated = useCallback(
    (args) => {
      setEdit(false);
      setTempEvent(args.event);
      loadPopupForm(args.event);
      setAnchor(args.target);
      setOpen(true);
    },
    [loadPopupForm]
  );

  // onDeleteClick과 동일한 역할을 하는 함수인데 확인 필요
  const onEventDeleted = useCallback(
    (args) => {
      deleteEvent(args.event);
    },
    [deleteEvent]
  );

  // 드래그앤 드롭, 리사이징 수정부분 api 요청
  const onEventUpdated = useCallback((args) => {
    const { scheduleId, title, description, start, end, color, groupId } =
      args.event;
    const editEvent = {
      scheduleId,
      groupId,
      body: {
        title,
        description,
        start: Date.parse(start),
        end: Date.parse(end),
        color,
      },
    };
    DragResizeSchedule(editEvent);
  }, []);

  // 팝업의 Header 텍스트
  const headerText = useMemo(
    () => (isEdit ? "일정 수정" : "일정 추가"),
    [isEdit]
  );

  // 팝업의 버튼 이름 등
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

  // 필요한지 확인 필요한 함수
  const onClose = useCallback(() => {
    if (!isEdit) {
      // refresh the list, if add popup was canceled, to remove the temporary event
      setMyEvents([...myEvents]);
    }
    setOpen(false);
    setColorPickerOpen(false);
  }, [isEdit, myEvents]);

  // ?
  const selectColor = useCallback((color) => {
    setTempColor(color);
  }, []);

  // ?
  const openColorPicker = useCallback(
    (ev) => {
      selectColor(selectedColor || "");
      setColorAnchor(ev.currentTarget);
      setColorPickerOpen(true);
    },
    [selectColor, selectedColor]
  );

  // 색상을 변경하는 함수
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
      <ToastContainer />
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

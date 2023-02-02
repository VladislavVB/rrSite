const eventDays = ["2023-01-03", "2023-01-04", "2023-02-10", "2023-02-20"];

const getActiveSlideIndex = (arrayDay) => {
  const currentDay = arrayDay[0];
  const indexDay = eventDays.indexOf(currentDay);
  if (indexDay !== -1) {
    return indexDay;
  } else {
    return false;
  }
};
const swiperAfisha = new Swiper(".swiper-afisha", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
swiperAfisha.on("slideChange", () => {
  const currentDate = eventDays[swiperAfisha.activeIndex];
  const currentDateMounth = currentDate.split("-")[1] - 1;
  console.log(currentDateMounth);
  calendar.settings.selected.dates = [currentDate];
  calendar.settings.selected.month = [currentDateMounth];
  calendar.update();
});

const calendar = new VanillaCalendar("#calendar", {
  settings: {
    lang: "ru",
    range: {
      min: "2023-01-01",
      max: "2023-02-28",
    },
    selected: {
      holidays: eventDays,
      dates: ["2023-01-04"],
    },
    visibility: {
      today: true,
    },
  },
  actions: {
    clickDay(event, dates) {
      // console.log(getActiveSlideIndex(dates));
      if (typeof getActiveSlideIndex(dates) === "number") {
        swiperAfisha.slideTo(getActiveSlideIndex(dates), 1000);
      }
    },
  },
});
calendar.init();

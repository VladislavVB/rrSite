const eventDays = ["2023-01-03", "2023-01-04", "2023-02-10", "2023-02-20"];

const swiperAfisha = new Swiper(".swiper-afisha", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
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
      dates: [eventDays[0]],
      month: 0
    },
    visibility: {
      today: true,
    },
  },
  actions: {
    clickDay(event, dates) {
      if (typeof getActiveSlideIndex(dates) === "number") {
        swiperAfisha.slideTo(getActiveSlideIndex(dates), 1000);
      }
    },
  },
});

const getActiveSlideIndex = (arrayDay) => {
  const currentDay = arrayDay[0];
  const indexDay = eventDays.indexOf(currentDay);
  if (indexDay !== -1) {
    return indexDay;
  } else {
    return false;
  }
};

swiperAfisha.on("slideChange", () => {
  const currentDate = eventDays[swiperAfisha.activeIndex];
  const currentDateMounth = currentDate.split("-")[1] - 1;
  calendar.settings.selected.dates = [currentDate];
  calendar.settings.selected.month = [currentDateMounth];
  calendar.update();
});
calendar.init();

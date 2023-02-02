
const calendar = new VanillaCalendar('#calendar', {
  settings: {
    lang: 'ru',
    range: {
      min: '2023-01-01',
      max: '2023-03-01',
    },
    selected: {
      holidays: ['2023-02-03', '2023-02-10', '2023-02-20'],
    },
    visibility: {
      today: true,
    },

  },
  actions: {
		clickDay(event, dates) {
      console.log({event},{dates});
    },
	},
 
});
calendar.init();


const swiperAfisha = new Swiper(".swiper-afisha", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
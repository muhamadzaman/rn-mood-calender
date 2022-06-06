import MyCalendar from "../components/calendar/Calendar";

export default function Home() {
  const journals = [
    {
      date: "2022-05-03",
      mood: "bad",
    },
    {
      date: "2022-05-14",
      mood: "good",
    },
    {
      date: "2022-05-23",
      mood: "okay",
    },
    {
      date: "2022-06-29",
      mood: "bad",
    },
    {
      date: "2022-06-08",
      mood: "okay",
    },
  ];

  return <MyCalendar journals={journals} />;
}

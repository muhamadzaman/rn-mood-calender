import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";

export default function MyCalendar({ journals }) {
  const TODAY = new Date();

  const ifToday = (date) => {
    const month = TODAY.getMonth() + 1;
    const DATE = `${TODAY.getFullYear()}-${
      month < 10 ? `0` + month : month
    }-${TODAY.getDate()}`;
    console.log(DATE + "//" + date);

    return date == DATE;
  };

  const moods = {
    good: {
      color: "#28E22D",
      icon: <Ionicons name="happy-outline" size={17} />,
    },
    okay: {
      color: "#E0E922",
      icon: <SimpleLineIcons name="emotsmile" size={17} />,
    },
    bad: {
      color: "#FF6666",
      icon: <Ionicons name="sad-outline" size={17} />,
    },
  };

  const ifJournalEntry = (date) => {
    return journals.find((item) => item.date === date);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Calendar
        dayComponent={({ date, state }) => {
          const jounalEntry = ifJournalEntry(date.dateString);

          return (
            <View>
              <View
                style={[
                  styles.dayBox,
                  {
                    backgroundColor: jounalEntry
                      ? moods[jounalEntry.mood].color
                      : "#F3F3F3",
                  },
                ]}
              >
                {jounalEntry && moods[jounalEntry.mood].icon}
              </View>
              <Text
                style={{
                  textAlign: "center",
                  color:
                    state === "disabled"
                      ? "gray"
                      : ifToday(date.dateString)
                      ? "#000"
                      : "#8a8a8a",
                  fontWeight: ifToday(date.dateString) ? "900" : "500",
                }}
              >
                {date.day}
              </Text>
            </View>
          );
        }}
        hideExtraDays={true}
        enableSwipeMonths={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  dayBox: {
    width: 30,
    height: 30,

    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

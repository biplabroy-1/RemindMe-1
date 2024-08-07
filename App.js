import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as TaskManager from 'expo-task-manager';

const schedule = {
  Monday: [
    {
      "Period": 3,
      "Time": "10:00 - 11:00",
      "Course_Name": "Internet and Web Technologies",
      "Instructor": "MR. GOURANGA BAG + DR. IMA HUSSAIN",
      "Room": "401",
      "Group": "All",
      "Class_type": "Lab"
    },
    {
      "Period": 4,
      "Time": "11:00 - 12:00",
      "Course_Name": "Internet and Web Technologies",
      "Instructor": "MR. GOURANGA BAG + DR. IMA HUSSAIN",
      "Room": "401",
      "Group": "All",
      "Class_type": "Lab"
    },
    {
      "Period": 5,
      "Time": "12:00 - 1:00",
      "Course_Name": "Internet and Web Technologies",
      "Instructor": "MR. GOURANGA BAG",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 7,
      "Time": "2:00 - 3:00",
      "Course_Name": "Internet and Web Technologies",
      "Instructor": "MR. GOURANGA BAG",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 8,
      "Time": "3:00 - 4:00",
      "Course_Name": "Database Management System",
      "Instructor": "MS. DIBITA ROY",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 9,
      "Time": "4:00 - 5:00",
      "Course_Name": "Database Management System",
      "Instructor": "MS. DIBITA ROY",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    }
  ],
  Tuesday: [
    {
      "Period": 4,
      "Time": "11:00 - 12:00",
      "Course_Name": "Communicative English Lab",
      "Instructor": "MS. MANASI PATRA",
      "Room": "203",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "Period": 5,
      "Time": "12:00 - 1:00",
      "Course_Name": "Communicative English Lab",
      "Instructor": "MS. MANASI PATRA",
      "Room": "203",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "Period": 6,
      "Time": "1:00 - 2:00",
      "Course_Name": "Communicative English Lab",
      "Instructor": "MS. MANASI PATRA",
      "Room": "203",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "Period": 7,
      "Time": "2:00 - 3:00",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "301",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
      "Period": 8,
      "Time": "3:00 - 4:00",
      "Course_Name": "Database Management System",
      "Instructor": "MS. DIBITA ROY",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 9,
      "Time": "4:00 - 5:00",
      "Course_Name": "Vedic Mathematics",
      "Instructor": "DR. SABNAM SWOMIN",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 10,
      "Time": "5:00 - 6:00",
      "Course_Name": "Object Oriented Programming in JAVA",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    }
  ],
  Wednesday: [
    {
      "Period": 2,
      "Time": "9:00 - 10:00",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "403",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "Period": 3,
      "Time": "10:00 - 11:00",
      "Course_Name": "Vedic Mathematics",
      "Instructor": "DR. SABNAM SWOMIN",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 4,
      "Time": "11:00 - 12:00",
      "Course_Name": "Vedic Mathematics",
      "Instructor": "DR. SABNAM SWOMIN",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 6,
      "Time": "1:00 - 2:00",
      "Course_Name": "Operating System",
      "Instructor": "MR. GOURAB DUTTA",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 7,
      "Time": "2:00 - 3:00",
      "Course_Name": "APTITUDE",
      "Instructor": "MS. RIMA BISWAS",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 8,
      "Time": "3:00 - 4:00",
      "Course_Name": "Object Oriented Programming in JAVA",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 9,
      "Time": "4:00 - 5:00",
      "Course_Name": "Communicative English Lab",
      "Instructor": "MS. MANASI PATRA",
      "Room": "308",
      "Group": "Group 1 + Group 2",
      "Class_type": "Lab"
    }
  ],
  Thursday: [
    {
      "Period": 2,
      "Time": "9:00 - 10:00",
      "Course_Name": "Communicative English Lab",
      "Instructor": "MS. MANASI PATRA",
      "Room": "204",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
      "Period": 3,
      "Time": "10:00 - 11:00",
      "Course_Name": "Communicative English Lab",
      "Instructor": "MS. MANASI PATRA",
      "Room": "204",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
      "Period": 4,
      "Time": "11:00 - 12:00",
      "Course_Name": "Communicative English Lab",
      "Instructor": "MS. MANASI PATRA",
      "Room": "204",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
      "Period": 5,
      "Time": "12:00 - 1:00",
      "Course_Name": "Operating System",
      "Instructor": "MR. GOURAB DUTTA",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 7,
      "Time": "2:00 - 3:00",
      "Course_Name": "Object Oriented Programming in JAVA",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 8,
      "Time": "3:00 - 4:00",
      "Course_Name": "SOFT SKILLS",
      "Instructor": "MS. DEBOLINA SAHA CHOWDHURY",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    },
    {
      "Period": 9,
      "Time": "4:00 - 5:00",
      "Course_Name": "SOFT SKILLS",
      "Instructor": "MS. DEBOLINA SAHA CHOWDHURY",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    }
  ],
  Friday: [
    {
      "Period": 1,
      "Time": "8:00 - 9:00",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "414",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "Period": 2,
      "Time": "9:00 - 10:00",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "414",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "Period": 3,
      "Time": "10:00 - 11:00",
      "Course_Name": "Database Management System",
      "Instructor": "MS. DIBITA ROY",
      "Room": "412",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
      "Period": 4,
      "Time": "11:00 - 12:00",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "414",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "Period": 4,
      "Time": "11:00 - 12:00",
      "Course_Name": "Database Management System",
      "Instructor": "MS. DIBITA ROY",
      "Room": "412",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
      "Period": 6,
      "Time": "1:00 - 2:00",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "415",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
      "Period": 6,
      "Time": "1:00 - 2:00",
      "Course_Name": "Database Management System",
      "Instructor": "MS. DIBITA ROY",
      "Room": "409",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "Period": 7,
      "Time": "2:00 - 3:00",
      "Course_Name": "Object Oriented Programming in JAVA Lab",
      "Instructor": "MR. KISHORE KUMAR RAY",
      "Room": "415",
      "Group": "Group 2",
      "Class_type": "Lab"
    },
    {
      "Period": 7,
      "Time": "2:00 - 3:00",
      "Course_Name": "Database Management System",
      "Instructor": "MS. DIBITA ROY",
      "Room": "409",
      "Group": "Group 1",
      "Class_type": "Lab"
    },
    {
      "Period": 8,
      "Time": "3:00 - 4:00",
      "Course_Name": "Operating System",
      "Instructor": "MR. GOURAB DUTTA",
      "Room": "308",
      "Group": "All",
      "Class_type": "Theory"
    }
  ]
};

// Define the task manager for background notifications
const BACKGROUND_NOTIFICATION_TASK = 'background-notification-task';

TaskManager.defineTask(BACKGROUND_NOTIFICATION_TASK, async () => {
  try {
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });

    if (schedule[day]) {
      for (const classInfo of schedule[day]) {
        const [start] = classInfo.Time.split(' - ');
        const [hour, minute] = start.split(':').map(Number);
        const classTime = new Date(now);
        classTime.setHours(hour, minute, 0, 0);

        // Schedule notification 1 day before
        const reminderNotificationTime = new Date(classTime);
        reminderNotificationTime.setDate(reminderNotificationTime.getDate() - 1);
        reminderNotificationTime.setHours(21, 0, 0, 0); // Reminder at 9 PM

        if (reminderNotificationTime > now) {
          await Notifications.scheduleNotificationAsync({
            content: {
              title: `Upcoming Class Tomorrow: ${classInfo.Course_Name}`,
              body: `Instructor: ${classInfo.Instructor}\nRoom: ${classInfo.Room}\nTime: ${classInfo.Time}`,
              data: { course: classInfo.Course_Name }
            },
            trigger: {
              date: reminderNotificationTime,
              repeats: false,
            },
          });
        }

        // Schedule alarm notification 1 hour before the class
        const alarmNotificationTime = new Date(classTime);
        alarmNotificationTime.setHours(alarmNotificationTime.getHours() - 1);

        if (alarmNotificationTime > now) {
          await Notifications.scheduleNotificationAsync({
            content: {
              title: `Class Reminder: ${classInfo.Course_Name}`,
              body: `Instructor: ${classInfo.Instructor}\nRoom: ${classInfo.Room}\nTime: ${classInfo.Time}`,
              data: { course: classInfo.Course_Name }
            },
            trigger: {
              date: alarmNotificationTime,
              repeats: false,
            },
          });
        }
      }
    }
  } catch (error) {
    console.error('Error in background notification task:', error);
  }
});

const App = () => {
  const [upcomingClasses, setUpcomingClasses] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const scheduleNotifications = async () => {
      const now = new Date();
      const day = now.toLocaleDateString('en-US', { weekday: 'long' });

      if (schedule[day]) {
        const classesToday = schedule[day];
        if (classesToday.length === 0) {
          setMessage('No classes today.');
          findNextClassDay();
          return;
        }

        const upcoming = classesToday.map(classInfo => {
          const [start] = classInfo.Time.split(' - ');
          const [hour, minute] = start.split(':').map(Number);
          const classTime = new Date(now);
          classTime.setHours(hour, minute, 0, 0);
          return { ...classInfo, time: classTime };
        }).sort((a, b) => a.time - b.time);

        setUpcomingClasses(upcoming);
      } else {
        setMessage('No classes today.');
        findNextClassDay();
      }
    };

    const findNextClassDay = () => {
      const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
      const todayIndex = daysOfWeek.indexOf(new Date().toLocaleDateString('en-US', { weekday: 'long' }));
      let nextClassDay = '';

      for (let i = 1; i < daysOfWeek.length; i++) {
        const nextIndex = (todayIndex + i) % daysOfWeek.length;
        if (schedule[daysOfWeek[nextIndex]] && schedule[daysOfWeek[nextIndex]].length > 0) {
          nextClassDay = daysOfWeek[nextIndex];
          break;
        }
      }

      if (nextClassDay) {
        setMessage(`Next class day is ${nextClassDay}.`);
        setUpcomingClasses(schedule[nextClassDay]);
      }
    };

    scheduleNotifications();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{message || 'Today Upcoming Classes'}</Text>
      <FlatList
        data={upcomingClasses}
        keyExtractor={(item) => `${item.Period}-${item.Time}`}
        renderItem={({ item }) => (
          <View style={styles.classContainer}>
            <Text style={styles.classTitle}>{item.Course_Name}</Text>
            <Text>Time: {item.Time}</Text>
            <Text>Instructor: {item.Instructor}</Text>
            <Text>Room: {item.Room}</Text>
            <Text>Type: {item.Class_type}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 20,
    paddingBottom: 0,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  classContainer: {
    marginBottom: 15,
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
  },
  classTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
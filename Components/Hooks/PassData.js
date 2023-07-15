import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
const issues = [
  {
    topic: "Profile Edited",
    to: "warden",
    icon: (
      <MaterialCommunityIcons name="account-edit" size={40} color="#0F766E" />
    ),
  },
  {
    topic: "Account Feature",
    to: "warden",
    icon: (
      <MaterialCommunityIcons name="account-cog" size={40} color="#0F766E" />
    ),
  },
  {
    topic: "Room Facility",
    to: "warden",
    icon: <MaterialIcons name="meeting-room" size={40} color="#0F766E" />,
  },
  {
    topic: "Meal Quality",
    to: "warden",
    icon: (
      <MaterialCommunityIcons name="food-turkey" size={40} color="#0F766E" />
    ),
  },
  {
    topic: "Meal bill not added",
    to: "accountant",
    icon: <MaterialCommunityIcons name="food-off" size={40} color="#0F766E" />,
  },
  {
    topic: "Seat rent not added",
    to: "accountant",
    icon: <MaterialIcons name="no-meeting-room" size={40} color="#0F766E" />,
  },
  {
    topic: "User Behaviour",
    to: "warden",
    icon: <FontAwesome5 name="users" size={36} color="#0F766E" />,
  },
  {
    topic: "Staff Behaviour",
    to: "warden",
    icon: <FontAwesome5 name="house-user" size={36} color="#0F766E" />,
  },
];
const roomMate = [
  {
    matric: "c183201",
    name: "James Cameron",
    sem: 3,
    dept: "CSE"
  },
  {
    matric: "c183202",
    name: "James Cameron",
    sem: 3,
    dept: "CSE"
  },
  {
    matric: "c183203",
    name: "James Cameron",
    sem: 3,
    dept: "CSE"
  },
  {
    matric: "c183204",
    name: "James Cameron",
    sem: 3,
    dept: "CSE"
  },
  {
    matric: "c183205",
    name: "James Cameron",
    sem: 3,
    dept: "CSE"
  },
  {
    matric: "c183206",
    name: "James Cameron",
    sem: 3,
    dept: "CSE"
  }
];
export { issues, roomMate };

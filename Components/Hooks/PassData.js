import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
const issues = [
  {
    topic: "Profile Edited",
    to: "warden",
    no: 1,
    icon: (
      <MaterialCommunityIcons name="account-edit" size={40} color="#164e63" />
    ),
  },
  {
    topic: "Account Feature",
    to: "warden",
    no: 2,
    icon: (
      <MaterialCommunityIcons name="account-cog" size={40} color="#164e63" />
    ),
  },
  {
    topic: "Room Facility",
    to: "warden",
    no: 3,
    icon: <MaterialIcons name="meeting-room" size={40} color="#164e63" />,
  },
  {
    topic: "Meal Quality",
    to: "warden",
    no: 4,
    icon: (
      <MaterialCommunityIcons name="food-turkey" size={40} color="#164e63" />
    ),
  },
  {
    topic: "Meal bill not added",
    to: "accountant",
    no: 5,
    icon: <MaterialCommunityIcons name="food-off" size={40} color="#164e63" />,
  },
  {
    topic: "Seat rent not added",
    to: "accountant",
    no: 6,
    icon: <MaterialIcons name="no-meeting-room" size={40} color="#164e63" />,
  },
  {
    topic: "User Behaviour",
    to: "warden",
    no: 7,
    icon: <FontAwesome5 name="users" size={36} color="#164e63" />,
  },
  {
    topic: "Staff Behaviour",
    to: "warden",
    no: 8,
    icon: <FontAwesome5 name="house-user" size={36} color="#164e63" />,
  },
];
const roomMate = [
  {
    matric: "c183201",
    name: "James Cameron",
    sem: 3,
    dept: "CSE",
  },
  {
    matric: "c183202",
    name: "James Cameron",
    sem: 3,
    dept: "CSE",
  },
  {
    matric: "c183203",
    name: "James Cameron",
    sem: 3,
    dept: "CSE",
  },
  {
    matric: "c183204",
    name: "James Cameron",
    sem: 3,
    dept: "CSE",
  },
  {
    matric: "c183205",
    name: "James Cameron",
    sem: 3,
    dept: "CSE",
  },
  {
    matric: "c183206",
    name: "James Cameron",
    sem: 3,
    dept: "CSE",
  },
];
export { issues, roomMate };

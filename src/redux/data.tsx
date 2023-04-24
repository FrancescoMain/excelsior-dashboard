import BalanceIcon from "@mui/icons-material/Balance";

export const NavigationList = [
  {
    id: 0,
    name: "Bilancio",
    path: "/excelsior-dashboard",
    icon: <BalanceIcon />,
    active: true,
    tabs: [
      {
        id: 0,
        name: "Reservations",
        path: "/excelsior-dashboard/",
      },
      {
        id: 1,
        name: "Bilancio",
        path: "/excelsior-dashboard/bilancio",
      },
      {
        id: 2,
        name: "Add Reservation",
        path: "/excelsior-dashboard/add-reservation",
      },
    ],
  },
];

import { JackpotUser, User } from "../types";

export const demoUsersInfo: User[] = [
  {
    rank: 1,
    username: "JohnDoe",
    avatar: "/src/assets/images/users/avatar1.png",
    bets: 18,
    wins: 14,
    winRate: 0.85,
    topSteak: 7,
    roi: 0.62,
    netProfit: 111.45,
  },
  {
    rank: 2,
    username: "JaneSmith",
    avatar: "/src/assets/images/users/avatar1.png",
    bets: 20,
    wins: 15,
    winRate: 0.75,
    topSteak: 5,
    roi: 0.50,
    netProfit: 100.00,
  },
  {
    rank: 3,
    username: "MikeJohnson",
    avatar: "/src/assets/images/users/avatar1.png",
    bets: 25,
    wins: 20,
    winRate: 0.80,
    topSteak: 6,
    roi: 0.36,
    netProfit: 90.00,
  },
  {
    rank: 4,
    username: "EmilyDavis",
    avatar: "/src/assets/images/users/avatar1.png",
    bets: 22,
    wins: 18,
    winRate: 0.82,
    topSteak: 4,
    roi: 0.45,
    netProfit: 80.00,
  },
  {
    rank: 5,
    username: "ChrisBrown",
    avatar: "/src/assets/images/users/avatar1.png",
    bets: 28,
    wins: 22,
    winRate: 0.79,
    topSteak: 5,
    roi: 0.25,
    netProfit: 70.00,
  },
  {
    rank: 6,
    username: "JessicaWilson",
    avatar: "/src/assets/images/users/avatar1.png",
    bets: 30,
    wins: 24,
    winRate: 0.80,
    topSteak: 6,
    roi: 0.20,
    netProfit: 60.00,
  },
  {
    rank: 7,
    username: "DavidMartinez",
    avatar: "/src/assets/images/users/avatar1.png",
    bets: 32,
    wins: 26,
    winRate: 0.81,
    topSteak: 5,
    roi: 0.16,
    netProfit: 50.00,
  },
  {
    rank: 8,
    username: "SarahGarcia",
    avatar: "/src/assets/images/users/avatar1.png",
    bets: 35,
    wins: 28,
    winRate: 0.80,
    topSteak: 4,
    roi: 0.14,
    netProfit: 40.00,
  },
  {
    rank: 9,
    username: "DanielRodriguez",
    avatar: "/src/assets/images/users/avatar1.png",
    bets: 38,
    wins: 30,
    winRate: 0.79,
    topSteak: 3,
    roi: 0.08,
    netProfit: 30.00,
  },
  {
    rank: 10,
    username: "LauraHernandez",
    avatar: "/src/assets/images/users/avatar1.png",
    bets: 40,
    wins: 12,
    winRate: 0.30,
    topSteak: 2,
    roi: -0.50,
    netProfit: -20.00,
  },
];

export const jackpotDemoUsers: JackpotUser[] = [
  {
    id: 10,
    reward: 0,
    investors: [],
  },
  {
    id: 9,
    reward: 23900,
    investors: [
      { avatar: "/src/assets/images/users/avatar1.png" },
    ],
  },
  {
    id: 8,
    reward: 5800,
    investors: [
      { avatar: "/src/assets/images/users/avatar1.png" },
      { avatar: "/src/assets/images/users/avatar1.png" },
    ],
  },
  {
    id: 7,
    reward: 2000,
    investors: [
      { avatar: "/src/assets/images/users/avatar1.png" },
      { avatar: "/src/assets/images/users/avatar1.png" },
      { avatar: "/src/assets/images/users/avatar1.png" },
    ],
  },
  {
    id: 6,
    reward: 1300,
    investors: [
      { avatar: "/src/assets/images/users/avatar1.png" },
      { avatar: "/src/assets/images/users/avatar1.png" },
      { avatar: "/src/assets/images/users/avatar1.png" },
      { avatar: "/src/assets/images/users/avatar1.png" },
    ],
  },
  {
    id: 5,
    reward: 800,
    investors: [
      { avatar: "/src/assets/images/users/avatar1.png" },
      { avatar: "/src/assets/images/users/avatar1.png" },
      { avatar: "/src/assets/images/users/avatar1.png" },
      { avatar: "/src/assets/images/users/avatar1.png" },
      { avatar: "/src/assets/images/users/avatar1.png" },
      { avatar: "/src/assets/images/users/avatar1.png" },
      { avatar: "/src/assets/images/users/avatar1.png" },
    ],
  },
  // {
  //   id: 4,
  //   reward: 500,
  //   investors: [
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //   ],
  // },
  // {
  //   id: 3,
  //   reward: 0,
  //   investors: [],
  // },
  // {
  //   id: 2,
  //   reward: 200,
  //   investors: [
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //   ],
  // },
  // {
  //   id: 1,
  //   reward: 100,
  //   investors: [
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //     { avatar: "/src/assets/images/users/avatar1.png" },
  //   ],
  // },
];

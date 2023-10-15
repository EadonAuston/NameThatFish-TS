import { Images } from "../../assets/Images";

type FishObject = {
  name: string;
  url: string;
};

export const initialFishes: FishObject[] = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

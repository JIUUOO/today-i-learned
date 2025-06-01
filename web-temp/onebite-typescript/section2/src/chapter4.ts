// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "민지우",
  nickname: "JIUUOO",
  birth: "2002.08.20",
  bio: "안녕하세요",
  location: "안양시",
};

let user2: User = {
  id: 2,
  name: "민지우",
  nickname: "거북이",
  birth: "2002.08.20",
  bio: "안녕하세요",
  location: "부천시",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};

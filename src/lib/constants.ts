import type { FooterSection, NavLink, Program, Teacher, Testimonial } from "@/types";

// 네비게이션 링크
export const NAV_LINKS: NavLink[] = [
  { href: "#intro", label: "소개" },
  { href: "#programs", label: "프로그램" },
  { href: "#reviews", label: "후기" },
  { href: "#instructors", label: "강사진" },
  { href: "#contact", label: "문의" },
];

export const SOCIAL_LINKS = [
  {
    name: "카카오톡",
    href: "https://pf.kakao.com/_miUFn",
  },
  {
    name: "인스타그램",
    href: "https://www.instagram.com/gomvocal",
  },
  {
    name: "유튜브",
    href: "https://www.youtube.com/@bestsky12",
  },
  {
    name: "블로그",
    href: "https://blog.naver.com/h-studio12",
  },
];

// 프로그램 데이터
export const PROGRAMS: Program[] = [
  {
    id: 1,
    title: "개인 레슨",
    description: "나만을 위한 1:1 맞춤 수업",
    duration: "",
    price: "",
  },
  {
    id: 2,
    title: "원데이 클래스",
    description: "단 하루로 경험하는 보컬 레슨",
    duration: "",
    price: "",
  },
  {
    id: 3,
    title: "퍼스널 보컬 컬러",
    description: "자신만의 음색 찾기",
    duration: "",
    price: "",
  },
  {
    id: 4,
    title: "그룹 클래스",
    description: "함께하는 즐거움과 성장",
    duration: "",
    price: "",
  },
  {
    id: 5,
    title: "청소년 특강",
    description: "10대 대상 집중 레슨",
    duration: "",
    price: "",
  },
  {
    id: 6,
    title: "입시/오디션 대비",
    description: "목표에 맞춘 전략적 훈련",
    duration: "",
    price: "",
  },
  {
    id: 7,
    title: "맞춤형 레슨",
    description: "스케줄과 레벨에 맞춘 구성",
    duration: "",
    price: "",
  },
];

// 강사 데이터 (단일 강사)
export const TEACHER: Teacher = {
  id: 1,
  name: "곰씨네",
  role: "보컬 트레이너 & 싱어송라이터",
  image: "/images/avatar.jpeg",
  experience: [
    "보컬 레슨 8년 차 · 누적 수강생 150명 이상",
    "멜론·지니 등 음원 플랫폼에 곡 발매 중 (현역 싱어송라이터)",
    "20여 개 교육기관 출강 중",
  ],
  albums: [
    {
      title: "싱글 '아이(I)'",
      link: "https://www.melon.com/album/detail.htm?albumId=11620807",
      cover: "/images/album1.jpeg",
    },
    {
      title: "싱글 '시작, 설렘'",
      link: "https://www.melon.com/album/detail.htm?albumId=11247874",
      cover: "/images/album2.jpeg",
    },
    {
      title: "EP '이별군상'",
      link: "https://www.melon.com/album/detail.htm?albumId=10790465",
      cover: "/images/album3.jpeg",
    },
    {
      title: "데뷔곡 '바보였어'",
      link: "https://www.melon.com/album/detail.htm?albumId=10245456",
      cover: "/images/album4.jpeg",
    },
  ],
  social: {
    instagram: SOCIAL_LINKS[1].href,
    youtube: SOCIAL_LINKS[2].href,
    blog: SOCIAL_LINKS[3].href,
  },
};

// 수강생 후기 데이터
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    content: "선생님이 친절하시고 재밌으십니다. 노래 처음 배우시는 분들에게 강추합니다!",
    author: "백OO",
    lesson: "원데이 보컬 레슨",
  },
  {
    id: 2,
    content: "노래의 ‘ㄴ’도 모르는 문외한인 제게 발성부터 기본기까지 차근차근 잘 알려주셨어요!",
    author: "양OO",
    lesson: "1:1 개인 보컬 레슨",
  },
  {
    id: 3,
    content:
      "보컬레슨 체험용으로도 좋고 데이트 코스로도 너무 좋았어요!! 친구랑 와도 재밌을 것 같아요 🥰👍",
    author: "박OO",
    lesson: "보컬 퍼스널 컬러 진단",
  },
  {
    id: 4,
    content:
      "선생님이 정말 친절하게 잘 가르쳐주시고 하나하나 잘 집어서 설명해주셔서 정말 좋았습니다.",
    author: "김OO",
    lesson: "1:1 개인 보컬 레슨",
  },
  {
    id: 5,
    content: "선생님이 친절하시고, 설명을 잘해주세요. 아이가 매주 즐겁게 다녔습니다. 감사합니다.",
    author: "이OO",
    lesson: "1:1 개인 보컬 레슨",
  },
  {
    id: 6,
    content:
      "노래에 조금이라도 관심있으시면 레슨 강추합니다. 알아듣기 쉽고 따라하기 쉽게 원리와 핵심을 잘 짚어 가르쳐주십니다.",
    author: "홍OO",
    lesson: "1:1 개인 보컬 레슨",
  },
];

// 레슨 소개 데이터
export const LESSON_POSTS = [
  {
    id: 1,
    title: "무료 상담 - 편하게 시작하는 첫 걸음",
    description: "전문 보컬 코치와 함께 부담없는 무료 상담",
    image: "/images/programs/program1.jpeg",
  },
  {
    id: 2,
    title: "1:1 개인 보컬 레슨 - 나만의 목소리를 찾는 시간",
    description: "일대일 맞춤형 개인 레슨으로 체계적인 보컬 트레이닝",
    image: "/images/programs/program2.jpeg",
  },
  {
    id: 3,
    title: "보컬 MBTI 퍼스널 컬러 진단",
    description: "나만의 음역대와 음색을 발견하는 특별한 진단 프로그램",
    image: "/images/programs/program3.jpeg",
  },
  {
    id: 4,
    title: "원데이 보컬 레슨 - 하루 만에 발견하는 나만의 목소리",
    description: "단 하루 만에 체험할 수 있는 집중 보컬 레슨",
    image: "/images/programs/program4.jpeg",
  },
  {
    id: 5,
    title: "2인 보컬 레슨 - 함께하는 즐거운 음악 여행",
    description: "친구, 연인과 함께하는 특별한 듀엣 레슨 프로그램",
    image: "/images/programs/program5.jpeg",
  },
  {
    id: 6,
    title: "원데이 발성 교정 - 깊어지고 편해지는 목소리",
    description: "올바른 발성법으로 더 안정적이고 건강한 목소리를 만드는 수업",

    image: "/images/programs/program6.jpeg",
  },
];

export const EXTERNAL_LINKS = {
  main: "https://naver.me/xIeMrVKQ",
  hanyangdae: "https://naver.me/xquv92tH",
  sooyou: "https://naver.me/Fnmdk4dp",
};

export const RESERVATION_LINKS = {
  main: "https://naver.me/5Gp091p2",
  hanyangdae: "https://naver.me/Fhfd9whC",
  sooyou: "https://naver.me/5DDPkQ8p",
};

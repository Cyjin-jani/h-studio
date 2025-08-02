// 프로그램 관련 타입
export interface Program {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: string;
}

// 강사 관련 타입
export interface Teacher {
  id: number;
  name: string;
  role: string;
  image: string;
  experience: string[];
  albums: {
    title: string;
    link: string;
    cover: string;
  }[];
  social: {
    instagram?: string;
    youtube?: string;
    blog?: string;
  };
}

// 후기 관련 타입
export interface Testimonial {
  id: number;
  content: string;
  author: string;
}

export interface LessonPost {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

// 폼 데이터 타입
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
}

// 네비게이션 링크 타입
export interface NavLink {
  href: string;
  label: string;
}

// 푸터 링크 타입
export interface FooterLink {
  href: string;
  label: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

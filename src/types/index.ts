export interface User {
  _id: string;
  name?: string;
  email?: string;
  role: string;
  photoURL?: string; // MongoDB field
  image?: string; // NextAuth field (sometimes used interchangeably)
  createdAt?: string;
}

export interface Course {
  _id: string;
  title: string;
  platform: string;
  status: "pending" | "approved" | "rejected";
  category: string;
  description?: string;
  createdAt?: string;
  thumbnailUrl?: string;
  currentOwner?: User;
}

export interface ExchangeRequest {
  _id: string;
  status: "pending" | "accepted" | "rejected";
  createdAt: string;
  fromUser: User;
  toUser: User;
  offeredCourse: Course;
  requestedCourse: Course;
}

export interface Survey {
  id?: number;
  firstName?: string;
  lastName?: string;
  street?: string;
  city?: string;
  state?: string;
  zip?: string
  tele?: string;
  email?: string;
  date?: string;
  likeStudents?: boolean;
  likeLocation?: boolean;
  likeCampus?: boolean;
  likeAtmos?: boolean;
  likeDorm?: boolean;
  likeSports?: boolean;
  howInterest?: number;
  recommend?: number;
  raffle?: string;
  comments?: string;
}

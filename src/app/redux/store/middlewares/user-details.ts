import type { NextApiRequest, NextApiResponse } from 'next';

export enum Role {
  STUDENT,
  INSTRUCTOR,
  ADMIN
}

type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  document: string;
  phone_number: string;
  role: Role;
  password?: string;
  created_at: Date;
  updated_at: Date;
}

export type UserDetailsResponse = {
  user: User
};

const userDetailsMutation = async () => {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: response.user
      });
    }
      , 1000);
  }) as UserDetailsResponse;

  return response;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserDetailsResponse>
) {
  const userDetails = await userDetailsMutation();

  res.status(200).json(userDetails);
}

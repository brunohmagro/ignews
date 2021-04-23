import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {
      id: 1,
      name: "Bruno Magro",
    },
    {
      id: 2,
      name: "Eric",
    },
    {
      id: 3,
      name: "Mariano",
    },
  ];

  return response.status(200).json(users);
};

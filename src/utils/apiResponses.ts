// import { Response } from "express";

// export const apiResponse = (
//   res: Response,
//   statusCode: number,
//   message: string,
//   data?: any
// ) => {
//   return res.status(statusCode).json({
//     message,
//     success: statusCode >= 200 && statusCode < 300,
//     ...(data !== undefined && { data }), // only include data if it's provided
//   });
// };

import { Response } from "express";

export const apiResponse = (
  res: Response,
  statusCode: number,
  message: string,
  data?: any,
): void => {
  const responseBody: {
    message: string;
    success: boolean;
    data?: any;
  } = {
    message,
    success: statusCode >= 200 && statusCode < 300,
  };

  if (data !== undefined) {
    responseBody.data = data;
  }

  res.status(statusCode).json(responseBody);
};

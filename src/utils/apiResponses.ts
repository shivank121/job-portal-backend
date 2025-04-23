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


// export const apiResponse = (
  //   res: Response,
//   statusCode: number,
//   message: string,
//   data?: any,
// ): void => {
//   const responseBody: {
//     message: string;
//     success: boolean;
//     data?: any;
//   } = {
//     message,
//     success: statusCode >= 200 && statusCode < 300,
//   };

//   if (data !== undefined) {
//     responseBody.data = data;
//   }

//   res.status(statusCode).json(responseBody);
// };


import { Response } from "express";

export const apiResponse = (
  res: Response,
  statusCode: number,
  message: string,
  data?: any,
): void => {
  // Validate status code
  if (statusCode < 100 || statusCode > 599) {
    console.error(`Invalid status code: ${statusCode}`);
    statusCode = 500; // fallback
  }

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

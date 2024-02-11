import axios from "axios";
import React, { useEffect } from "react";
import { Skeleton } from "antd";
export const api = async (url) => {
  try {
    const respone = await axios(url);
    return respone;
  } catch (error) {
    console.log(error);
  } finally {
  }
};

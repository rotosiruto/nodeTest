import { v4 as uuidv4 } from "uuid";
export const createNotice = (status, content, options = {}) => {
  const { id = uuidv4(), isDismissible = true } = status;
  console.log(2222, options, id);
  return {
    type: "CREATE_NOTICE",
    notice: {
      id,
      status,
      content,
      isDismissible,
    },
  };
};

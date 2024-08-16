import { theme } from "antd";
const { useToken } = theme;

export const useTheme = () => {
  const { token: theme } = useToken();
  return { theme };
};

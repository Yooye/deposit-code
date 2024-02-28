export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  bglv1: string;
  bglv2: string;
}

export const lightTheme: Theme = {
  primaryColor: "#ffffff",
  secondaryColor: "#f0f0f0",
  textColor: "#000000",
  bglv1: "#ECF1F9",
  bglv2: "#F6F9FC",
};

export const darkTheme: Theme = {
  primaryColor: "#1F2427",
  secondaryColor: "#333333",
  textColor: "#ffffff",
  bglv1: "#131316",
  bglv2: "#2B3037",
};

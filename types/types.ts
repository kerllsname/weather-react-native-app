export type weatherData = {
  main: {
    temp: number;
  };
  name: string;
  weather: [
    {
      main: string;
      description: string;
    }
  ];
};

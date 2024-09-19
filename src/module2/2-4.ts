{
  //

  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
  }

  type EmailWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmailWatch> = {
    name: "emon",
    computer: {
      brand: "asus",
      model: "xrr",
      releaseYear: 2202,
    },
    smartWatch: {
      brand: "hawie",
      model: "kw66",
      display: "OLED",
    },
  };
  const reachDeveloper: Developer<{}> = {
    name: "emon",
    computer: {
      brand: "asus",
      model: "xrr",
      releaseYear: 2202,
    },
    smartWatch: {
      brand: "hawie",
      model: "kw66",
      display: "OLED",
    },
  };

  //
}

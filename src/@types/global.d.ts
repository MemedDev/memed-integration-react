interface ColorsProps {
  primary: {
    base: string;
    text: string;
    '90': string;
    '80': string;
    '70': string;
    '60': string;
    '50': string;
    '40': string;
    '30': string;
    '24': string;
    '12': string;
    '08': string;
  };
  secondary: {
    base: string;
    text: string;
    '90': string;
    '80': string;
    '70': string;
    '60': string;
    '50': string;
    '40': string;
    '30': string;
    '24': string;
    '12': string;
    '08': string;
  };
  danger: {
    base: string;
    text: string;
  };
  disabled: {
    base: string;
    text: string;
  };
  background: {
    base: string;
  };
  black: {
    base: string;
    '90': string;
    '80': string;
    '70': string;
    '60': string;
    '50': string;
    '40': string;
    '30': string;
    '24': string;
    '12': string;
    '08': string;
  };
  white: {
    base: string;
    '90': string;
    '80': string;
    '70': string;
    '60': string;
    '50': string;
    '40': string;
    '30': string;
    '24': string;
    '12': string;
    '08': string;
  };
}

interface TypographyProps {
  heading1: {
    [key: string]: string | number;
  };
  heading2: {
    [key: string]: string | number;
  };
  heading3: {
    [key: string]: string | number;
  };
  heading4: {
    [key: string]: string | number;
  };
  heading6: {
    [key: string]: string | number;
  };
  caption1: {
    [key: string]: string | number;
  };
  caption2: {
    [key: string]: string | number;
  };
}

interface SpacingProps {
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
  '10': string;
  small: string;
  extraSmall: string;
}

interface BorderRadiusProps {
  small: string;
  base: string;
  large: string;
  extraLarge: string;
}

interface ThemeProps {
  theme: {
    borderRadius: BorderRadiusProps;
    colors: ColorsProps;
    spacing: SpacingProps;
    transitions: {
      easeInOut: {
        slow: string;
        base: string;
        fast: string;
      };
    };
    typography: TypographyProps;
  };
}

declare namespace MdHub {
  let initialized: boolean;

  function init(options: any): void;

  namespace command {
    function send(module: string, commandName: string, data?: any): Promise<any>;
  }

  namespace event {
    function add(eventName: string, callback: (data: any) => void): void;
    function trigger(eventName: string, data?: any): void;
    function remove(eventName: string): void;
  }

  namespace server {
    function unbindEvents(): void;
  }

  namespace module {
    function hide(moduleName: string): void;
    function show(moduleName: string): void;
  }

  namespace optionsCustom {
    const global: {
      fullscreen: boolean;
    };
  }
}

declare namespace MdSinapsePrescricao {
  let initialized: boolean;

  function init(options: any): void;

  namespace command {
    function send(module: string, commandName: string, data?: any): Promise<any>;
  }

  namespace event {
    function add(eventName: string, callback: (data: any) => void): void;
    function trigger(eventName: string, data?: any): void;
    function remove(eventName: string): void;
  }

  namespace module {
    function hide(moduleName: string): void;
    function show(moduleName: string): void;
  }
}

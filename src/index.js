import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Grommet } from 'grommet';

const darkTheme = {
  "name": "my theme",
  "rounding": 2,
  "spacing": 16,
  "defaultMode": "light",
  "global": {
    "colors": {
      "brand": {
        "dark": "#339933",
        "light": "#004400"
      },
      "background": {
        "dark": "#111111",
        "light": "#005500"
      },
      "background-back": {
        "dark": "#111111",
        "light": "#EEEEEE"
      },
      "background-front": {
        "dark": "#222222",
        "light": "#FFFFFF"
      },
      "background-contrast": {
        "dark": "#FFFFFF11",
        "light": "#11111111"
      },
      "text": {
        "dark": "#EEEEEE",
        "light": "#333333"
      },
      "text-strong": {
        "dark": "#FFFFFF",
        "light": "#FFFFFF"
      },
      "text-weak": {
        "dark": "#CCCCCC",
        "light": "#666666"
      },
      "text-xweak": {
        "dark": "#999999",
        "light": "#555555"
      },
      "border": {
        "dark": "#008800",
        "light": "#008800"
      },
      "control": "brand",
      "active-background": "background-contrast",
      "active-text": "text-strong",
      "selected-background": "brand",
      "selected-text": "text-strong",
      "status-critical": "#FF4040",
      "status-warning": "#FFAA15",
      "status-ok": "#00C781",
      "status-unknown": "#CCCCCC",
      "status-disabled": "#CCCCCC",
      "graph-0": "brand",
      "graph-1": "status-warning"
    },
    "font": {
      "family": "Helvetica",
      "size": "12px",
      "height": "16px",
      "maxWidth": "192px"
    },
    "active": {
      "background": "active-background",
      "color": "active-text"
    },
    "hover": {
      "background": "active-background",
      "color": "active-text"
    },
    "selected": {
      "background": "selected-background",
      "color": "selected-text"
    },
    "control": {
      "border": {
        "radius": "2px"
      }
    },
    "drop": {
      "border": {
        "radius": "2px"
      }
    },
    "borderSize": {
      "xsmall": "1px",
      "small": "2px",
      "medium": "3px",
      "large": "8px",
      "xlarge": "16px"
    },
    "breakpoints": {
      "small": {
        "value": 512,
        "borderSize": {
          "xsmall": "1px",
          "small": "2px",
          "medium": "3px",
          "large": "4px",
          "xlarge": "8px"
        },
        "edgeSize": {
          "none": "0px",
          "hair": "1px",
          "xxsmall": "2px",
          "xsmall": "2px",
          "small": "4px",
          "medium": "8px",
          "large": "16px",
          "xlarge": "32px"
        },
        "size": {
          "xxsmall": "16px",
          "xsmall": "32px",
          "small": "64px",
          "medium": "128px",
          "large": "256px",
          "xlarge": "512px",
          "full": "100%"
        }
      },
      "medium": {
        "value": 1024
      },
      "large": {}
    },
    "edgeSize": {
      "none": "0px",
      "hair": "1px",
      "xxsmall": "2px",
      "xsmall": "4px",
      "small": "8px",
      "medium": "16px",
      "large": "32px",
      "xlarge": "64px",
      "responsiveBreakpoint": "small"
    },
    "input": {
      "padding": "8px",
      "weight": 600
    },
    "spacing": "16px",
    "size": {
      "xxsmall": "32px",
      "xsmall": "64px",
      "small": "128px",
      "medium": "256px",
      "large": "512px",
      "xlarge": "768px",
      "xxlarge": "1024px",
      "full": "100%"
    }
  },
  "chart": {},
  "diagram": {
    "line": {}
  },
  "meter": {},
  "button": {
    "border": {
      "width": "2px",
      "radius": "12px"
    },
    "padding": {
      "vertical": "2px",
      "horizontal": "14px"
    }
  },
  "checkBox": {
    "check": {
      "radius": "2px"
    },
    "toggle": {
      "radius": "16px",
      "size": "32px"
    },
    "size": "16px"
  },
  "radioButton": {
    "size": "16px"
  },
  "formField": {
    "border": {
      "color": "border",
      "error": {
        "color": {
          "dark": "white",
          "light": "status-critical"
        }
      },
      "position": "inner",
      "side": "bottom"
    },
    "content": {
      "pad": "small"
    },
    "disabled": {
      "background": {
        "color": "status-disabled",
        "opacity": "medium"
      }
    },
    "error": {
      "color": "status-critical",
      "margin": {
        "vertical": "xsmall",
        "horizontal": "small"
      }
    },
    "help": {
      "color": "dark-3",
      "margin": {
        "start": "small"
      }
    },
    "info": {
      "color": "text-xweak",
      "margin": {
        "vertical": "xsmall",
        "horizontal": "small"
      }
    },
    "label": {
      "margin": {
        "vertical": "xsmall",
        "horizontal": "small"
      }
    },
    "margin": {
      "bottom": "small"
    },
    "round": "2px"
  },
  "calendar": {
    "small": {
      "fontSize": "10.933333333333334px",
      "lineHeight": 1.375,
      "daySize": "18.29px"
    },
    "medium": {
      "fontSize": "12px",
      "lineHeight": 1.45,
      "daySize": "36.57px"
    },
    "large": {
      "fontSize": "15.2px",
      "lineHeight": 1.11,
      "daySize": "73.14px"
    }
  },
  "clock": {
    "analog": {
      "hour": {
        "width": "5px",
        "size": "16px"
      },
      "minute": {
        "width": "3px",
        "size": "8px"
      },
      "second": {
        "width": "2px",
        "size": "6px"
      },
      "size": {
        "small": "48px",
        "medium": "64px",
        "large": "96px",
        "xlarge": "144px",
        "huge": "192px"
      }
    },
    "digital": {
      "text": {
        "xsmall": {
          "size": "9.866666666666667px",
          "height": 1.5
        },
        "small": {
          "size": "10.933333333333334px",
          "height": 1.43
        },
        "medium": {
          "size": "12px",
          "height": 1.375
        },
        "large": {
          "size": "13.066666666666666px",
          "height": 1.167
        },
        "xlarge": {
          "size": "14.133333333333333px",
          "height": 1.1875
        },
        "xxlarge": {
          "size": "16.266666666666666px",
          "height": 1.125
        }
      }
    }
  },
  "heading": {
    "level": {
      "1": {
        "small": {
          "size": "16px",
          "height": "20px",
          "maxWidth": "260px"
        },
        "medium": {
          "size": "21px",
          "height": "25px",
          "maxWidth": "329px"
        },
        "large": {
          "size": "29px",
          "height": "33px",
          "maxWidth": "465px"
        },
        "xlarge": {
          "size": "38px",
          "height": "42px",
          "maxWidth": "602px"
        }
      },
      "2": {
        "small": {
          "size": "15px",
          "height": "19px",
          "maxWidth": "243px"
        },
        "medium": {
          "size": "18px",
          "height": "22px",
          "maxWidth": "294px"
        },
        "large": {
          "size": "22px",
          "height": "26px",
          "maxWidth": "346px"
        },
        "xlarge": {
          "size": "25px",
          "height": "29px",
          "maxWidth": "397px"
        }
      },
      "3": {
        "small": {
          "size": "14px",
          "height": "18px",
          "maxWidth": "226px"
        },
        "medium": {
          "size": "16px",
          "height": "20px",
          "maxWidth": "260px"
        },
        "large": {
          "size": "18px",
          "height": "22px",
          "maxWidth": "294px"
        },
        "xlarge": {
          "size": "21px",
          "height": "25px",
          "maxWidth": "329px"
        }
      },
      "4": {
        "small": {
          "size": "13px",
          "height": "17px",
          "maxWidth": "209px"
        },
        "medium": {
          "size": "14px",
          "height": "18px",
          "maxWidth": "226px"
        },
        "large": {
          "size": "15px",
          "height": "19px",
          "maxWidth": "243px"
        },
        "xlarge": {
          "size": "16px",
          "height": "20px",
          "maxWidth": "260px"
        }
      },
      "5": {
        "small": {
          "size": "11px",
          "height": "15px",
          "maxWidth": "183px"
        },
        "medium": {
          "size": "11px",
          "height": "15px",
          "maxWidth": "183px"
        },
        "large": {
          "size": "11px",
          "height": "15px",
          "maxWidth": "183px"
        },
        "xlarge": {
          "size": "11px",
          "height": "15px",
          "maxWidth": "183px"
        }
      },
      "6": {
        "small": {
          "size": "11px",
          "height": "15px",
          "maxWidth": "175px"
        },
        "medium": {
          "size": "11px",
          "height": "15px",
          "maxWidth": "175px"
        },
        "large": {
          "size": "11px",
          "height": "15px",
          "maxWidth": "175px"
        },
        "xlarge": {
          "size": "11px",
          "height": "15px",
          "maxWidth": "175px"
        }
      }
    }
  },
  "paragraph": {
    "small": {
      "size": "11px",
      "height": "15px",
      "maxWidth": "183px"
    },
    "medium": {
      "size": "12px",
      "height": "16px",
      "maxWidth": "192px"
    },
    "large": {
      "size": "13px",
      "height": "17px",
      "maxWidth": "209px"
    },
    "xlarge": {
      "size": "14px",
      "height": "18px",
      "maxWidth": "226px"
    },
    "xxlarge": {
      "size": "16px",
      "height": "20px",
      "maxWidth": "260px"
    }
  },
  "text": {
    "xsmall": {
      "size": "11px",
      "height": "15px",
      "maxWidth": "175px"
    },
    "small": {
      "size": "11px",
      "height": "15px",
      "maxWidth": "183px"
    },
    "medium": {
      "size": "12px",
      "height": "16px",
      "maxWidth": "192px"
    },
    "large": {
      "size": "13px",
      "height": "17px",
      "maxWidth": "209px"
    },
    "xlarge": {
      "size": "14px",
      "height": "18px",
      "maxWidth": "226px"
    },
    "xxlarge": {
      "size": "16px",
      "height": "20px",
      "maxWidth": "260px"
    }
  },
  "scale": 0.4,
  "layer": {
    "background": {
      "dark": "#111111",
      "light": "#FFFFFF"
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={darkTheme}>
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById('root')
);

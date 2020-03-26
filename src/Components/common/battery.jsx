import React, { Component } from "react";

class Battery extends Component {
  constructor() {
    super();
    this.state = {
      battery: 26
    };
  }

  //   componentDidMount() {
  //     //neue Daten laden und der state zuweisen
  //     this.props.socketinit.on("dataBattery", databattery =>
  //       this.setState({ battery: databattery })
  //     );
  //   }

  render() {
    const { battery } = this.state;

    if (battery > 100) {
      var bat = 100;
    } else {
      bat = battery;
    }

    if (bat > 80) {
      var tmp = 0;
    } else if (bat <= 80 && bat > 60) {
      tmp = 1;
    } else if (bat <= 60 && bat > 40) {
      tmp = 2;
    } else if (bat <= 40 && bat > 20) {
      tmp = 3;
    } else {
      tmp = 4;
    }

    return (
      <div align="center">
        {(() => {
          switch (tmp) {
            case 0:
              return <i class="fa fa-battery-full" aria-hidden="true" />;
            case 1:
              return (
                <i class="fa fa-battery-three-quarters" aria-hidden="true" />
              );
            case 2:
              return <i class="fa fa-battery-half" aria-hidden="true" />;
            case 3:
              return <i class="fa fa-battery-quarter" aria-hidden="true" />;
            default:
              return <i class="fa fa-battery-empty" aria-hidden="true" />;
          }
        })()}
      </div>
    );
  }
}

export default Battery;

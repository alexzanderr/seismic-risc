import React from 'react';
import { Tabs } from 'antd';
import HereMapInteractive from '../../components/HereMapInteractive';

import config from '../../config';

const { TabPane } = Tabs;

const { BUILDINGS_URL, MAP_API_KEY } = config;

export default () => {
  const [state, setState] = React.useState({
    initialPoints: [],
    filteredPoints: null,
  });
  React.useEffect(() => {
    fetch(BUILDINGS_URL)
      .then((res) => res.json())
      .then((points) => {
        setState((prevState) => ({
          ...prevState,
          initialPoints: points,
        }));
      })
      .catch(() => {
        setState((prevState) => ({
          ...prevState,
          initialPoints: [],
        }));
      });
  }, []);

  const onChange = (e) => {
    const { initialPoints } = state;
    setState({
      ...state,
      filteredPoints:
        e === 'all'
          ? initialPoints
          : initialPoints.filter((poi) => {
              return poi.risk_category === e;
            }),
    });
  };

  return (
    <div>
      <Tabs size="large" animated={false} defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Toate clasele de risc seismic" key="all" />
        <TabPane tab="U1" key="U1" />
        <TabPane tab="U2" key="U2" />
        <TabPane tab="U3" key="U3" />
        <TabPane tab="U4" key="U4" />
        <TabPane tab="RS1" key="Rs I" />
        <TabPane tab="RS2" key="Rs II" />
        <TabPane tab="RS3" key="Rs III" />
        <TabPane tab="RS4" key="Rs IV" />
        <TabPane tab="Altele" key="n/a" />
      </Tabs>
      <HereMapInteractive
        apikey={MAP_API_KEY}
        points={state.filteredPoints || state.initialPoints}
      />
    </div>
  );
};

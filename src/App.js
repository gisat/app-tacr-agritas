import React, { useEffect } from "react";
import {connects, connect, Route, ConnectedRouter, Switch} from '@gisatcz/ptr-state';
import Favicon from 'react-favicon';

import Action from './state/Action';
import Select from './state/Select';

// base styles need to be imported before all components
import '@gisatcz/ptr-core/lib/styles/reset.css';
import '@gisatcz/ptr-core/lib/styles/base.scss';
import './styles/index.scss';

// import config from './config';
import utils from "./utils";
import App from "./components/App";
import favicon from './assets/favicon.ico';
import PageIndex from "./components/PageIndex";

import {AppContainer} from "@gisatcz/ptr-components";
// import * as serviceWorker from "./serviceWorker";
import config from './config';
// const ConnectedAppContainer = connects.AppContainer(AppContainer);
const appConfigUrl = config.tacrAgritasDataRepositoryUrl + 'config.json';

let farmsConfig = null;

const AppPresentation = ({ places = [], onMount, history, context, activePlaceKey, activePeriodKey, activeScopeKey }) => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    onMount();
  }, []);


  const pages = places.map(place => place.key);

  return (
    places ?
    <>
				<Favicon url={favicon}/>
          <div id="ptr">
            <AppContainer appKey="tacrAgritas">
              <ConnectedRouter history={history} context={context}>
								<Switch>
                  {pages.map(key =>
                      <Route
                        key={key}
                        path={"/" + key}
                        render={(props) => {
                          if(activeScopeKey && activePeriodKey) {
                            return <App placeKey={key}/>
                          } else {
                            return null;
                          }
                        }}
                      />
                    )}

                    {/* default path */}
                    <Route path="/" render={() => (
                      // withRouter(<PageIndex places={places}/>)
                      <PageIndex places={places}/>
                    )}/>
                  </Switch>
                </ConnectedRouter>
            </AppContainer>
          </div>
			</> : null
  );
};

const mapStateToProps = state => {
  return {
    places: Select.specific.tacrAgritas.getPlaces(state),
    activePlaceKey: Select.places.getActiveKey(state),
    activePeriodKey: Select.periods.getActiveKey(state),
    activeScopeKey: Select.scopes.getActiveKey(state),
  };
};

const mapDispatchToPropsFactory = () => {
  return (dispatch, ownProps) => {
    return {
      onMount: () => {
        dispatch(Action.app.updateLocalConfiguration(config));


        const processConfig = (config) => {
          if (config && config.data) {
            const d = config.data;
        
            if (d.configurations) {
              const data = d.configurations[0].data.data;
              dispatch(Action.app.add(data));
            }
            if (d.cases) {
              dispatch(Action.cases.add(d.cases));
            }
            if (d.scopes) {
              dispatch(Action.scopes.add(d.scopes));
            }
            if (d.periods) {
              dispatch(Action.periods.add(d.periods));
            }
            if (d.places) {
              dispatch(Action.places.add(d.places));
            }
            if (d.activeCaseKey) {
              dispatch(Action.cases.setActiveKey(d.activeCaseKey));
            }
            if (d.activePeriodKey) {
              dispatch(Action.periods.setActiveKey(d.activePeriodKey));
            }
            if (d.activeScopeKey) {
              dispatch(Action.scopes.setActiveKey(d.activeScopeKey));
            }

          } else {
            throw new Error("No data in config!");
          }
        }

        if(!farmsConfig) {
          utils.request(appConfigUrl, "GET", null, null).then((res) => {
            farmsConfig = res;
            processConfig(farmsConfig)
          })
        } else {
          processConfig(farmsConfig)
        }

        // i18n.changeLanguage("cz");
      }
    };
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPropsFactory
)(AppPresentation);
// export default AppPresentation;

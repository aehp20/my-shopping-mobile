import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { ThemeProvider } from 'styled-components'

import { AppProvider, AppContext } from './App-Context'
import { ROOT_PATH, HOME_PATH } from './App-Constants'
import {
  LIST_PRODUCTS_NEW_PATH,
  LIST_PRODUCTS_EDIT_PATH,
} from './views/listProducts/ListProducts-Constants'
import { ListProducts } from './views/listProducts'
import { Home } from './views/home'
import {
  PRODUCT_NEW_PATH,
  PRODUCT_EDIT_PATH,
} from './views/listProducts/product/Product-Constants'
import { Product } from './views/listProducts/product'
import { MENU_PATH } from './views/menu/Menu-Constants'
import { Menu } from './views/menu'
import { GlobalStyles } from './theme/global'
import { getTheme } from './App-Utils'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

const App: React.FC = () => (
  <IonApp>
    <AppProvider>
      <AppContext.Consumer>
        {({ appData }) => (
          <ThemeProvider theme={getTheme(appData.config.theme)}>
            <GlobalStyles />
            <IonReactRouter>
              <IonRouterOutlet>
                <Route path={MENU_PATH} component={Menu} exact={true} />
                <Route path={HOME_PATH} component={Home} exact={true} />
                <Route
                  path={LIST_PRODUCTS_NEW_PATH}
                  component={ListProducts}
                  exact={true}
                />
                <Route
                  path={LIST_PRODUCTS_EDIT_PATH}
                  component={ListProducts}
                  exact={true}
                />
                <Route
                  path={PRODUCT_NEW_PATH}
                  component={Product}
                  exact={true}
                />
                <Route
                  path={PRODUCT_EDIT_PATH}
                  component={Product}
                  exact={true}
                />
                <Route
                  exact
                  path={ROOT_PATH}
                  render={() => <Redirect to={HOME_PATH} />}
                />
              </IonRouterOutlet>
            </IonReactRouter>
          </ThemeProvider>
        )}
      </AppContext.Consumer>
    </AppProvider>
  </IonApp>
)

export default App

import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

import { Home } from './views/home'
import { AppProvider } from './App-Context'
import { ListProducts } from './pages/listProducts'
import {
  LIST_PRODUCTS_NEW_PATH,
  LIST_PRODUCTS_EDIT_PATH,
} from './pages/listProducts/ListProducts-Constants'
import { ROOT_PATH, HOME_PATH } from './App-Constants'

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
import './theme/common.css'
import { PRODUCT_NEW_PATH } from './pages/product/Product-Constants'
import { LISTS_PRODUCTS_PATH, ListsProducts } from './views/listsProducts'
// import { Product } from "./pages/product"

const App: React.FC = () => (
  <IonApp>
    <AppProvider>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path={HOME_PATH} component={Home} exact={true} />
          {/* <Route path={LIST_PRODUCTS_NEW_PATH} component={ListProducts} exact={true} /> */}
          {/* <Route path={LIST_PRODUCTS_EDIT_PATH} component={ListProducts} exact={true} /> */}
          {/* <Route path={PRODUCT_NEW_PATH} component={Product} exact={true} /> */}
          {/* <Route path={PRODUCT_EDIT_PATH} component={Product} exact={true} /> */}
          <Route
            exact
            path={ROOT_PATH}
            render={() => <Redirect to={HOME_PATH} />}
          />
        </IonRouterOutlet>
      </IonReactRouter>
    </AppProvider>
  </IonApp>
)

export default App

import { createStore } from 'vuex'
import user, { UserModule } from './modules/user'
import permission, { PermissionModule } from './modules/permission'
import app, { AppModule } from './modules/app'

export interface RootState {
    app: AppModule
    user: UserModule
    permission: PermissionModule
    dict: any
}

const store = createStore<RootState>({
    modules: {
        app,
        user,
        permission
    }
})

export default store

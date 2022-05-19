const files = import.meta.globEager('./modules/*.ts')
const modules: Record<string, any> = {}
Object.keys(files).forEach(key => {
    const moduleName = key.replace('./modules/', '').replace('.ts', '')
    modules[moduleName] = files[key].default
})

export default modules

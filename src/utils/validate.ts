const validatePhone = (rule: any, value: string, callback: any) => {
    const reg = /^1[3456789]\d{9}$/
    if (!reg.test(value)) {
        callback(new Error('请输入正确的手机号'))
    } else {
        callback()
    }
}

const validateMail = (rule: any, value: string, callback: any) => {
    const reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
    if (!reg.test(value)) {
        callback(new Error('请输入正确的邮箱'))
    } else {
        callback()
    }
}
export { validatePhone, validateMail }

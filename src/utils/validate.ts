/**
 * 手机号码格式验证
 * @param _rule 验证规则
 * @param value 需要验证的值
 * @param callback 回调函数
 */
const validatePhone = (rule: any, value: string, callback: any) => {
    const reg = /^1[3456789]\d{9}$/
    if (!reg.test(value)) {
        callback(new Error('请输入正确的手机号'))
    } else {
        callback()
    }
}

/**
 * 邮箱格式验证
 * @param rule 验证规则（是否满足18位）
 * @param value 需要验证的值
 * @param callback 回调函数
 */
const validateMail = (rule: any, value: string, callback: any) => {
    const reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
    if (!reg.test(value)) {
        callback(new Error('请输入正确的邮箱'))
    } else {
        callback()
    }
}
export { validatePhone, validateMail }

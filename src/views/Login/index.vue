<template>
    <div class="page">
        <div class="login">
            <div class="title">Arbalest</div>
            <div class="form-box">
                <el-form ref="form" :model="formData" :rules="rules" label-width="80px">
                    <el-form-item label="account" prop="username">
                        <el-input
                            v-model="formData.username"
                            placeholder="Please enter your account"
                            type="text"
                        />
                    </el-form-item>
                    <el-form-item label="password" prop="password">
                        <el-input
                            v-model="formData.password"
                            placeholder="Please enter your password"
                            type="password"
                            @keyup.enter="doLogin"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" type="primary" @click="doLogin"
                            >Login</el-button
                        >
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="Login">
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
const route = useRoute()
const router = useRouter()
const form = ref()
const formData = reactive({
    username: '',
    password: ''
})
const rules = {
    username: [{ required: true, trigger: 'blur', message: 'Please enter your account' }],
    password: [{ required: true, trigger: 'blur', message: 'Please enter your password' }]
}

const redirectUrl = ref('')
watch(
    () => route.path,
    () => {
        const { redirect } = route.query
        redirectUrl.value = String(redirect)
    }
)

const loading = ref(false)
const doLogin = async () => {
    await form.value.validate()
    loading.value = true
    userStore
        .login(formData)
        .then(() => {
            router.push(redirectUrl.value || '/')
        })
        .finally(() => {
            loading.value = false
        })
}
</script>

<style lang="scss" scoped>
$w: 600px;
$h: 500px;
.page {
    perspective: 1000px;
}
.login {
    transition: all 1s ease-in-out;
    margin: 120px auto 0;
    padding: 140px 100px 100px;
    width: $w;
    height: $h;
    box-sizing: border-box;
    position: relative;
    box-shadow: 0 0 6px 6px #efefef;
    border-radius: 16px;
    animation: rotate 9s linear infinite;
    animation-direction: alternate;
    &::before {
        z-index: -1;
        transition: all 1s ease-in-out;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        box-sizing: border-box;
        border: 2px solid $primary;
        border-radius: 16px;
        opacity: 0;
        clip: rect(0, 0, 0, 0);
    }
    &::after {
        z-index: -1;
        transition: all 1s ease-in-out;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        box-sizing: border-box;
        border: 2px solid $primary;
        border-radius: 16px;
        opacity: 0;
        clip: rect($h, $w, $h, $w);
    }
    @keyframes rotate {
        0% {
            transform: rotateX(0) rotateY(0);
        }
        33% {
            transform: rotateX(0deg) rotateY(30deg);
        }
        100% {
            transform: rotateX(0deg) rotateY(-30deg);
        }
    }
    &:hover {
        box-shadow: none;
        animation: none;
        transform: rotateY(0);
        &::before,
        &::after {
            opacity: 1;
            clip: rect(0, $w, $h, 0);
        }
        .title {
            top: 100px;
            font-size: 36px;
        }

        .form-box {
            opacity: 1;
        }
    }
}
.title {
    font-size: 48px;
    z-index: 1;
    transition: all 1s ease-in-out;
    width: 100%;
    text-align: center;
    color: $primary;
    font-weight: bold;
    margin-bottom: 100px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
}
.form-box {
    transition: all 1s ease-in-out;
    width: 400px;
    margin: 60px auto;
    opacity: 0;
}
</style>

<template>
    <div class="media-info">
        <a-upload
            v-model:file-list="fileList"
            name="file"
            :custom-request="() => null"
            @change="handleChange"
        >
            <a-button>
                <upload-outlined></upload-outlined>
                Click to Upload
            </a-button>
        </a-upload>
    </div>
</template>

<script lang="ts" setup name="MediaInfo">
import useMediaInfo from '@/hooks/useMediaInfo'

const fileList = ref([])
const { getFileInfo } = useMediaInfo()

const handleChange = async ({ file }: any) => {
    try {
        const info = await getFileInfo(file.originFileObj)
        console.log(info.media.track[0])
    } catch (err) {
        console.log(err)
    }
}
</script>

<style lang="scss" scoped></style>

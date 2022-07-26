import { read, utils, writeFile, Sheet, WorkBook } from 'xlsx'

const useXlsx = () => {
    const excelToJson = ({ file, header }: { file: any; header?: string[] }) => {
        return new Promise(resolve => {
            const reader = new FileReader()
            reader.readAsBinaryString(file)
            reader.onload = (res: any) => {
                const data = res.target.result
                const workbook: WorkBook = read(data, { type: 'binary' })
                const { Sheets, SheetNames } = workbook
                const jsonData = utils.sheet_to_json(Sheets[SheetNames[0]], { header, defval: '' })
                header && jsonData.shift()
                resolve(jsonData)
            }
        })
    }

    const jsonToExcel = ({ data = [], header = [], fileName = 'excel', sheetName = 'sheet1' }) => {
        const list = data.map(item => [...Object.keys(item).map(key => item[key])])
        const sheet: Sheet = utils.aoa_to_sheet([header, ...list])
        const workbook: WorkBook = utils.book_new()
        utils.book_append_sheet(workbook, sheet, sheetName)
        const url = writeFile(workbook, `${fileName}.xlsx`)
        return url
    }

    return {
        excelToJson,
        jsonToExcel
    }
}
export default useXlsx

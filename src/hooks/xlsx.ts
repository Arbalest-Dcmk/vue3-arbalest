import XLSX, { Sheet, WorkBook } from 'xlsx'
export default function xlsx() {
    const excelToJson = (e: any, header?: string[]) => {
        return new Promise(resolve => {
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.readAsBinaryString(file)
            reader.onload = (res: any) => {
                const data = res.target.result
                const workbook: WorkBook = XLSX.read(data, { type: 'binary' })
                const { Sheets, SheetNames } = workbook
                const jsonData = XLSX.utils.sheet_to_json(Sheets[SheetNames[0]], {
                    header,
                    defval: ''
                })
                header && jsonData.shift()
                resolve(jsonData)
            }
        })
    }

    const jsonToExcel = (
        data: Record<string, any>[],
        {
            header = [],
            fileName = 'excel.xlsx',
            sheetName = 'sheet1'
        }: {
            header?: string[]
            fileName?: string
            sheetName?: string
        }
    ) => {
        const list = data.map(item => [...Object.keys(item).map(key => item[key])])
        const sheet: Sheet = XLSX.utils.aoa_to_sheet([header, ...list])
        const workbook: WorkBook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workbook, sheet, sheetName)
        const url = XLSX.writeFile(workbook, fileName)
        return url
    }

    return {
        excelToJson,
        jsonToExcel
    }
}

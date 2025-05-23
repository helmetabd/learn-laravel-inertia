const getChartColorsArray = (colors: string) => {
    const colorsParse = JSON.parse(colors)
    return colorsParse.map(function (value: string) {
        const newValue = value.replace(' ', '')
        if (newValue.indexOf(',') === -1) {
            let color = getComputedStyle(document.documentElement).getPropertyValue(newValue)
            if (color) {
                color = color.replace(' ', '')
                return color
            } else return newValue
        } else {
            const val = value.split(',')
            if (val.length == 2) {
                let rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0])
                rgbaColor = 'rgba(' + rgbaColor + ',' + val[1] + ')'
                return rgbaColor
            } else {
                return newValue
            }
        }
    })
}

export default getChartColorsArray

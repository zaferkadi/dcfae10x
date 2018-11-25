import { Dimensions } from 'react-native'
function mapSettings() {
    let { width, height } = Dimensions.get('window')
    const ASPECT_RATIO = width / height
    const LATITUDE_DELTA = 1 //Very high zoom level
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
    return {
        LATITUDE_DELTA,
        LONGITUDE_DELTA
    }
}


export {
    mapSettings
}

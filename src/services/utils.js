import { Dimensions, PixelRatio, PermissionsAndroid } from "react-native";

export const widthPercentageToDp = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) /100);
};

export const heightPercentageToDp = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) /100);
};

export function getAdjustedFontSize(size){
  let width = Dimensions.get('window').width;
  return parseInt(size) * width * (1.8 - 0.002 * width) / 400;
}

export async function requestLocationPermission(permissionType, title, message) {
  try {
    const granted = await PermissionsAndroid.request(
      permissionType,
      {
        'title': title,
        'message': message
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the location");
      return true;
    } else {
      console.log("location permission denied");
      return false;
    }
  } catch (err) {
    console.warn(err)
  }
}
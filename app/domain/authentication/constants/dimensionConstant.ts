import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

export const heights = {
  height: height,
  width: width,
  splash_image_height: height * 0.115,
  spalsh_image_width: height * 0.28,
  onboarding_first_image: height * 0.53,
  Onboarding_first_Horizontal_padding: height * 0.03,
  Onboarding_first_Vertical_padding: height * 0.06,
  Error_Text_Margin: height * 0.01,
};

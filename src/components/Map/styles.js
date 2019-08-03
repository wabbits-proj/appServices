import styled from 'styled-components/native';
import MapView from 'react-native-maps';

import { widthPercentageToDp, heightPercentageToDp } from '~/services/utils';

export const Container = styled(MapView)`
  width: ${widthPercentageToDp('100%')};
  height: ${heightPercentageToDp('50%')};
`;

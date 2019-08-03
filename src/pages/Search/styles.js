import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { widthPercentageToDp, heightPercentageToDp } from '~/services/utils';

export const Container = styled.View`
  flex: 1;
  background: #EAE6DD;
`;

export const Content = styled.View`
  width: ${widthPercentageToDp('100%')};
  height: ${heightPercentageToDp('47.3%')};
  padding-left: ${widthPercentageToDp('2%')};
  padding-right: ${widthPercentageToDp('2%')};
  background: #FFF;
  elevation: 3;
  border: 1px solid #DDD;
  border-top-width: 2;
  border-radius: 10;
  position: absolute;
  bottom: 0;
`;

export const ListView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  flex: 1;
`;  

export const List = styled.View`
  width: ${widthPercentageToDp('96%')};
  height: ${heightPercentageToDp('12%')};
  margin-top: 5;
  margin-bottom: 5;
  /* background: blue; */
  border-top-width: ${StyleSheet.hairlineWidth}px;
`;


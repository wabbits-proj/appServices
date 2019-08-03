import { StyleSheet } from "react-native";
import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const Container = styled.View`
  margin-top: 8;
  margin-bottom: 8;
  height: ${heightPercentageToDp('6%')};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-color: ${props => props.borderColor};
  border-width: 2;
  border-radius: 5;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#828282'
})`
  flex: 1;
  height: ${heightPercentageToDp('5.8%')};
  padding-bottom: 6;
  padding-left: 10;
  font-size: 16;  
  color: #828282;
`;

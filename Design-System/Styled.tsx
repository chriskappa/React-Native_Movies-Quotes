import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledInput = styled(TextInput)
const StyledTouchable = styled(TouchableOpacity)
const StyledSafeAreaView = styled(SafeAreaView)
const Styled = () => null

Styled.View = StyledView;
Styled.Text = StyledText;
Styled.Input = StyledInput;
Styled.Touchable = StyledTouchable
Styled.SafeAreaView = StyledSafeAreaView;
export default Styled
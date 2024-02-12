import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledInput = styled(TextInput)
const StyledTouchable = styled(TouchableOpacity)
const Styled = () => null

Styled.View = StyledView;
Styled.Text = StyledText;
Styled.Input = StyledInput;
Styled.Touchable = StyledTouchable
export default Styled
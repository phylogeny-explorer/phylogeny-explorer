import styled from 'styled-components';
import { transparentize } from 'polished';
import { Form as FormikForm } from 'formik';
import { DescriptionText } from 'components/Typography';

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 556px;
  margin: auto;
  display: grid;
  grid-gap: ${props => props.theme.largeSpacer}px;
  align-content: start;
  padding: ${props => props.theme.xLargeSpacer}px;
  background: ${props => transparentize(0.05, props.theme.black)};
  color: ${props => props.theme.white};
  border-radius: 3px;
`;

export const Header = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.smallSpacer}px;
`;

export const Text = styled(DescriptionText)``;

interface FormProps {
  $justifyEnd?: boolean;
}

export const Form = styled(FormikForm)<FormProps>`
  display: grid;
  grid-gap: ${props => props.theme.largeSpacer}px;

  ${props => props.$justifyEnd && `justify-items: end;`}
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.smallSpacer}px;
`;

export const ErrorMessage = styled(DescriptionText)`
  color: ${props => props.theme.lsecondary};
`;

export const NativeForm = styled.form`
  display: grid;
  grid-gap: ${props => props.theme.largeSpacer}px;
`;

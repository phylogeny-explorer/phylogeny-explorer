import styled from 'styled-components';
import { DescriptionText } from 'components/Typography';
import { Form as FormikForm } from 'formik';

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 556px;
  margin: auto;
  display: grid;
  grid-gap: ${props => props.theme.largeSpacer}px;
  align-content: start;
  padding: ${props => props.theme.xLargeSpacer}px;
  background: rgba(43, 48, 52, 0.96);
  color: ${props => props.theme.white};
  border-radius: 3px;
`;

export const Header = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.smallSpacer}px;
`;

export const Text = styled(DescriptionText)``;

export const Form = styled(FormikForm)`
  display: grid;
  grid-gap: ${props => props.theme.largeSpacer}px;
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

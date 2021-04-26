import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = styled(ToastContainer)`
  padding: 0;
  top: ${props => props.theme.xlargeSpacer}px;
  width: unset;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .Toastify__toast {
    display: flex;
    align-items: center;
    min-height: unset;
    margin-bottom: ${props => props.theme.largeSpacer}px;
    padding: ${props => props.theme.largeSpacer}px;
    border-radius: ${props => props.theme.spacer}px;
    font-size: 16px;
    line-height: 24px;

    &--default {
      background: ${props => props.theme.white};
      color: ${props => props.theme.black};
    }

    &--dark {
      background: ${props => props.theme.vdgrey};
    }

    &--info {
      background: ${props => props.theme.primary};
    }

    &--success {
      background: ${props => props.theme.success};
      color: ${props => props.theme.black};
    }

    &--error {
      background: ${props => props.theme.warning};
    }

    &-body {
      margin: 0 ${props => props.theme.spacer}px;
    }
  }
`;

export default Toast;

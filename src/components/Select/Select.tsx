import React from 'react';
import ReactSelect, { Props } from 'react-select';
import { useTheme } from 'styled-components';

type Option<ValueType extends number | string = string> = {
  value: ValueType;
  label: string;
};

const Select = <OptionType extends Option, IsMulti extends boolean = false>(
  props: Props<OptionType, IsMulti>
) => {
  const defaultTheme = useTheme();

  return (
    <ReactSelect
      {...props}
      theme={theme => ({
        ...theme,
        colors: { ...theme.colors, primary: defaultTheme.primary },
      })}
      styles={{
        control: base => ({
          ...base,
          minHeight: defaultTheme.buttonHeight,
        }),
        indicatorSeparator: () => ({ display: 'none' }),
        dropdownIndicator: base => ({
          ...base,
          padding: defaultTheme.spacers.sm,
        }),
        placeholder: base => ({
          ...base,
          fontSize: '0.875rem',
          color: defaultTheme.grey,
        }),
      }}
      onChange={props.onChange}
      placeholder={props.placeholder || 'Select...'}
      closeMenuOnSelect
    />
  );
};

export default Select;

import { forwardRef, Ref } from 'react';
import {
  Checkbox,
  ComboBox,
  CubeCheckboxProps,
  CubeComboBoxProps,
  CubeMenuProps,
  CubeSwitchProps,
  Field,
  FieldTypes,
  Menu,
  NumberInput,
  PasswordInput,
  SearchInput,
  Select,
  Switch,
  TextArea,
  TextInput,
} from '@cube-dev/ui-kit';
import { CubeFieldProps } from '@cube-dev/ui-kit/types/components/forms/Form/Field';

import { useTheme } from './hooks/useTheme';
import { CPText } from './Text';
import {
  CPNumberInputPropsType,
  CPSearchInputPropsType,
  CPSelectPropsType,
  CPTextAreaPropsType,
  CPTextInputPropsType,
} from './types';
import { CPColumn } from './Utils';

const CPTextInput = forwardRef(function CPTextInput(
  {
    styles,
    labelStyles,
    wrapperStyles,
    validationErrorMessage,
    validationError = false,
    size = 'normal',
    ...otherProps
  }: CPTextInputPropsType,
  ref: Ref<HTMLInputElement>,
) {
  const theme = useTheme();

  return (
    <CPColumn gap="0.25rem">
      <TextInput
        ref={ref}
        styles={{
          fill: 'transparent',
          color: 'var(--cp-text)',
          opacity: {
            '': '1',
            disabled: '0.5',
          },
          cursor: {
            '': 'initial',
            disabled: 'not-allowed',
          },
          Prefix: {
            padding: '0.5rem',
          },
          ...styles,
        }}
        width={size === 'normal' ? ['60%', '70%', '100%'] : '100%'}
        labelStyles={{ fontWeight: '400', color: 'var(--cp-text)', ...labelStyles }}
        wrapperStyles={{
          radius: '2r',
          overflow: 'hidden',
          border: `1px solid ${theme === 'dark' ? 'rgb(50, 48, 52)' : '#E5E1E6'}`,
          fill: 'var(--cp-surface)',
          boxShadow: {
            '': 'none',
            'is-hsa': 'none',
            'is-fhsa': 'none',
            'is-hifa': 'none',
            'is-focused': 'none',
          },
          ...wrapperStyles,
        }}
        {...otherProps}
      />
      {validationError && validationErrorMessage !== '' ? (
        <CPText color="var(--cp-surface-critical)">{validationErrorMessage}</CPText>
      ) : null}
    </CPColumn>
  );
});

const CPPasswordInput = forwardRef(function CPPasswordInput(
  { styles, labelStyles, wrapperStyles, size = 'normal', ...otherProps }: CPTextInputPropsType,
  ref: Ref<HTMLInputElement>,
) {
  const theme = useTheme();

  return (
    <PasswordInput
      ref={ref}
      inputStyles={{
        color: {
          '': 'var(--cp-text)',
          'is-hovered': 'var(--cp-text)',
          'is-focused': 'var(--cp-text)',
        },
      }}
      styles={{
        fill: 'var(--cp-surface)',
        color: 'var(--cp-text)',
        Prefix: {
          padding: '0.5rem',
        },
        Suffix: {
          background: 'var(--cp-surface-subdued)',
          borderLeft: '1px solid var(--cp-border)',
        },
        ButtonIcon: {
          color: 'var(--cp-icon)',
        },
        ...styles,
      }}
      width={size === 'normal' ? ['60%', '70%', '100%'] : '100%'}
      labelStyles={{ fontWeight: '400', color: 'var(--cp-text)', ...labelStyles }}
      wrapperStyles={{
        radius: '2r',
        overflow: 'hidden',
        border: `1px solid ${theme === 'dark' ? '#323034' : '#E5E1E6'}`,
        fill: 'var(--cp-surface)',
        boxShadow: {
          '': 'none',
          'is-hsa': 'none',
          'is-fhsa': 'none',
          'is-hifa': 'none',
          'is-focused': 'none',
        },
        ...wrapperStyles,
      }}
      {...otherProps}
    />
  );
});

const CPNumberInput = forwardRef(function CPNumberInput(
  { styles, labelStyles, wrapperStyles, size = 'normal', ...otherProps }: CPNumberInputPropsType,
  ref: Ref<HTMLInputElement>,
) {
  const theme = useTheme();

  return (
    <NumberInput
      ref={ref}
      styles={{ fill: 'transparent', color: 'var(--cp-text)', ...styles }}
      labelStyles={{ fontWeight: '400', color: 'var(--cp-text)', ...labelStyles }}
      wrapperStyles={{
        radius: '2r',
        width: size === 'normal' ? ['60%', '70%', '100%'] : '100%',
        overflow: 'hidden',
        border: `1px solid ${theme === 'dark' ? '#323034' : '#E5E1E6'}`,
        fill: 'var(--cp-surface)',
        boxShadow: {
          '': 'none',
          'is-hsa': 'none',
          'is-fhsa': 'none',
          'is-hifa': 'none',
          'is-focused': 'none',
        },
        ...wrapperStyles,
      }}
      {...otherProps}
    />
  );
});

const CPSearchInput = forwardRef(function CPTextInput(
  { styles, labelStyles, wrapperStyles, size = 'normal', ...otherProps }: CPSearchInputPropsType,
  ref: Ref<HTMLInputElement>,
) {
  const theme = useTheme();

  return (
    <SearchInput
      ref={ref}
      styles={{
        color: 'var(--cp-text)',
        Prefix: {
          color: 'var(--cp-text)',
        },
        ...styles,
      }}
      width={size === 'normal' ? ['60%', '70%', '100%'] : '100%'}
      labelStyles={{ fontWeight: '400', color: 'var(--cp-text)', ...labelStyles }}
      wrapperStyles={{
        radius: '2r',
        overflow: 'hidden',
        boxShadow: {
          '': 'none',
          'is-hsa': 'none',
          'is-fhsa': 'none',
          'is-hifa': 'none',
          'is-focused': 'none',
        },
        border: {
          '': `1px solid ${theme === 'dark' ? '#323034' : '#E5E1E6'}`,
          'is-focused': '0px solid red',
        },
        fill: 'var(--cp-surface)',
        ...wrapperStyles,
      }}
      {...otherProps}
    />
  );
});

const CPTextArea = forwardRef(function CPTextArea(
  { styles, labelStyles, wrapperStyles, ...otherProps }: CPTextAreaPropsType,
  ref: Ref<HTMLInputElement>,
) {
  const theme = useTheme();
  return (
    <TextArea
      ref={ref}
      styles={{ fill: 'var(--cp-surface)', color: 'var(--cp-text)', ...styles }}
      labelStyles={{ fontWeight: '400', color: 'var(--cp-text)', ...labelStyles }}
      wrapperStyles={{
        radius: '2r',
        overflow: 'hidden',
        border: `1px solid ${theme === 'dark' ? '#323034' : '#E5E1E6'}`,
        fill: 'var(--cp-surface)',
        boxShadow: {
          '': 'none',
          'is-hsa': 'none',
          'is-fhsa': 'none',
          'is-hifa': 'none',
          'is-focused': 'none',
        },

        ...wrapperStyles,
      }}
      {...otherProps}
    />
  );
});

function CPSelect({
  styles,
  labelStyles,
  optionStyles,
  listBoxStyles,
  inputStyles,
  size = 'normal',
  ...otherProps
}: CPSelectPropsType) {
  const theme = useTheme();
  return (
    <Select
      inputStyles={{
        radius: '2r',
        overflow: 'hidden',
        border: `1px solid ${theme === 'dark' ? '#323034' : '#E5E1E6'}`,
        ...inputStyles,
      }}
      width={size === 'normal' ? ['60%', '70%', '100%'] : '100%'}
      styles={{
        Value: {
          color: 'var(--cp-text)',
        },
        opacity: {
          '': '1',
          disabled: '0.5',
        },
        cursor: {
          '': 'pointer',
          'is-disabled': 'not-allowed',
          disabled: 'not-allowed',
        },
        fill: {
          '': 'var(--cp-surface)',
          hovered: 'var(--cp-surface)',
        },
        color: 'var(--cp-text)',
        Prefix: {
          fill: 'var(--cp-surface)',
          padding: '0.25rem',
          fontWeight: 500,
          color: 'var(--cp-text)',
        },
        Suffix: {
          padding: '0.25rem',
          fontWeight: 500,
          color: 'var(--cp-text)',
        },
        ...styles,
      }}
      optionStyles={{
        fill: {
          '': 'var(--cp-surface)',
          'hovered | focused': 'var(--cp-surface-hovered)',
          'hovered | selected': 'var(--cp-surface-hovered)',
          'is-hovered | selected': 'var(--cp-surface-hovered)',
        },
        color: 'var(--cp-text)',
        ...optionStyles,
      }}
      listBoxStyles={{
        fill: 'var(--cp-surface)',
        border: `1px solid ${theme === 'dark' ? '#323034' : '#E5E1E6'}`,
        ...listBoxStyles,
      }}
      labelStyles={{ fontWeight: '400', color: 'var(--cp-text)', ...labelStyles }}
      {...otherProps}
    />
  );
}

function CPCheckbox(props: CubeCheckboxProps) {
  let { styles, ...otherProps } = props;
  const theme = useTheme();

  return (
    <Checkbox
      styles={{
        width: '1.25rem',
        height: '1.25rem',
        borderRadius: '0.25rem',
        border: `1px solid  ${theme === 'dark' ? '#323034' : '#E5E1E6'}`,
        fill: {
          '': 'var(--cp-surface)',
          checked: 'var(--cp-surface-primary)',
        },
        ...styles,
      }}
      {...otherProps}
    />
  );
}

function CPSwitch(props: CubeSwitchProps) {
  return (
    <Switch
      inputStyles={{
        fill: {
          '': 'var(--cp-surface-hovered)',
          'is-ads': 'red',
          'is-ada': 'blue',
          'is-rqwe': 'blue',
          'is-rwer': 'blue',
          'is-awe': 'blue',
          checked: 'var(--cp-surface-primary)',
        },
      }}
      labelStyles={{
        color: 'var(--cp-text)',
      }}
      {...props}
    />
  );
}

function CPComboBox({
  styles,
  labelStyles,
  size = 'normal',
  optionStyles,
  listBoxStyles,
  inputStyles,
  ...otherProps
}: CubeComboBoxProps<object> & { size?: 'normal' | 'full' }) {
  const theme = useTheme();
  return (
    <ComboBox
      optionStyles={{
        fill: {
          '': 'var(--cp-surface)',
          'hovered | focused': 'var(--cp-surface-hovered)',
          'hovered | selected': 'var(--cp-surface-hovered)',
          'is-hovered | selected': 'var(--cp-surface-hovered)',
        },
        color: 'var(--cp-text)',
        ...optionStyles,
      }}
      inputStyles={{
        radius: '2r',
        overflow: 'hidden',
        ...inputStyles,
      }}
      width={size === 'normal' ? ['60%', '70%', '100%'] : '100%'}
      styles={{
        boxShadow: {
          '': 'none',
          'is-hsa': 'none',
          'is-fhsa': 'none',
          'is-hifa': 'none',
          'is-focused': 'none',
        },
        Value: {
          color: 'var(--cp-text)',
        },
        opacity: {
          '': '1',
          disabled: '0.5',
        },
        cursor: {
          '': 'pointer',
          'is-disabled': 'not-allowed',
          disabled: 'not-allowed',
        },
        fill: {
          '': 'var(--cp-surface)',
          hovered: 'var(--cp-surface)',
        },
        color: 'var(--cp-text)',
        Prefix: {
          fill: 'var(--cp-surface)',
          padding: '0.25rem',
          fontWeight: 500,
          color: 'var(--cp-text)',
        },
        Suffix: {
          padding: '0.25rem',
          fontWeight: 500,
          color: 'var(--cp-text)',
        },
        ...styles,
      }}
      listBoxStyles={{
        fill: 'var(--cp-surface)',
        border: `1px solid ${theme === 'dark' ? '#323034' : '#E5E1E6'}`,
        ...listBoxStyles,
      }}
      labelStyles={{ fontWeight: '400', color: 'var(--cp-text)', ...labelStyles }}
      {...otherProps}
    />
  );
}

function CPField<T extends FieldTypes>(props: CubeFieldProps<T>) {
  const { labelStyles, ...otherProps } = props;
  return (
    <Field<T>
      labelPosition="top"
      labelStyles={{
        fontWeight: 400,
        color: 'var(--cp-text)',
        ...labelStyles,
      }}
      {...otherProps}
    />
  );
}

function CPMenu<T>({ children, styles, ...otherProps }: CubeMenuProps<T>) {
  const theme = useTheme();
  return (
    <Menu
      radius="2r"
      styles={{
        fill: 'var(--cp-surface)',
        gap: '0.3rem',
        border: `1px solid ${theme === 'dark' ? '#323034' : '#E5E1E6'}`,

        ...styles,
      }}
      {...otherProps}
    >
      {children}
    </Menu>
  );
}

export {
  CPTextInput,
  CPNumberInput,
  CPPasswordInput,
  CPSearchInput,
  CPSelect,
  CPSwitch,
  CPCheckbox,
  CPField,
  CPComboBox,
  CPTextArea,
  CPMenu,
};

import {
  Block,
  CopySnippet,
  CubeBlockProps,
  CubeCopySnippetProps,
  CubeTagProps,
  Flex,
  Placeholder,
  Tag,
  tasty,
} from '@cube-dev/ui-kit';

import { CPPlaceholderPropsType } from './types';

const CPColumn = tasty(Flex, {
  flow: 'column',
});

const CPRow = tasty(Flex, {
  flow: 'row',
});

function CPDivider() {
  return (
    <Block
      styles={{
        height: '100%',
        width: '1px',
      }}
      fill="var(--cp-border)"
    />
  );
}

function CPSlash() {
  return (
    <Block
      styles={{
        width: '2px',
        height: '1.5rem',
        background: 'var(--cp-border)',
        transform: 'skew(-15deg)',
      }}
    />
  );
}

function CPCopySnippet({ code, styles, ...otherProps }: CubeCopySnippetProps) {
  return (
    <CopySnippet
      code={code}
      width={['60%', '70%', '100%']}
      fill="var(--cp-surface)"
      radius="2r"
      styles={{
        ButtonIcon: { color: 'var(--cp-icon)' },
        color: 'var(--cp-text)',
        Code: {
          color: 'var(--cp-text)',
        },
        ...styles,
      }}
      style={{
        border: '1px solid var(--cp-border)',
      }}
      {...otherProps}
    />
  );
}

function CPPillOutline({ children, style }: CubeBlockProps) {
  return (
    <span
      style={{
        border: '1px solid var(--cp-border)',
        fontSize: '0.75rem',
        color: 'var(--cp-text)',
        padding: '2px 0.5rem',
        borderRadius: '5rem',
        ...style,
      }}
    >
      {children}
    </span>
  );
}

function CPTag(props: CubeTagProps) {
  return <Tag {...props} />;
}

function CPPlaceholder(props: CPPlaceholderPropsType) {
  const { size, ...otherProps } = props;
  let finalSize =
    size === 'lg' ? '2.5rem' : size === 'md' ? '2rem' : size === 'sm' ? '1.5rem' : size;
  return <Placeholder {...otherProps} size={finalSize} />;
}

const CPIndicator = tasty({
  as: 'div',
  border: 'none',
  styles: {
    width: 10,
    height: 10,
    borderRadius: '10px',
    display: 'inline-block',
  },
  styleProps: ['backgroundColor'],
});

export {
  CPColumn,
  CPRow,
  CPCopySnippet,
  CPSlash,
  CPTag,
  CPPillOutline,
  CPPlaceholder,
  CPDivider,
  CPIndicator,
};

import { IntrinsicElementsKeys } from '@stitches/react/types/styled-component';
import { ComponentProps } from '@stitches/react';
import { styled } from '@/lib/stitches';

export const Box = ({
  as,
  flexbox,
  ...props
}: { as?: IntrinsicElementsKeys; flexbox?: boolean } & ComponentProps<
  typeof box
>) => {
  const StyledBox = styled(as || 'div', {
    resolveCSSProperties: [{ display: flexbox, trueValue: 'flex' }],
  });

  return <StyledBox {...props} />;
};

const box = styled({} as IntrinsicElementsKeys);

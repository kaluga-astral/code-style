import { Typography, styled } from '@astral/ui';
import { type CSSProperties } from 'react';

export const AccordionHeader = styled.header<{ withStartAdorment: boolean }>`
  cursor: pointer;

  display: grid;
  grid-column-gap: ${({ theme }) => theme.spacing(2)};
  grid-template-columns: ${({ withStartAdorment }) =>
    withStartAdorment ? '24px 1fr 24px' : ' 1fr 24px'};
`;

export const AccordionContentWrapper = styled.div<{
  withStartAdorment: boolean;
}>`
  margin-left: ${({ theme, withStartAdorment }) =>
    theme.spacing(withStartAdorment ? 8 : 0)};
  padding-top: ${({ theme }) => theme.spacing(2)};
`;

export const AccordionSummary = styled(Typography)`
  align-self: center;
`;

export const AccordionChevronWrapper = styled.div`
  overflow: hidden;

  width: 24px;
  height: 24px;
`;

type CollapsibleTypographyWrapperProps = {
  rowsCount: number;
  isOpenCollapse: boolean;
  currentHeight: CSSProperties['height'];
};

const collapsibleTypographyWrapperProps = [
  'rowsCount',
  'isOpenCollapse',
  'currentHeight',
];

export const CollapsibleTypographyWrapper = styled(Typography, {
  shouldForwardProp: (name) =>
    !collapsibleTypographyWrapperProps.includes(name),
})<CollapsibleTypographyWrapperProps>`
  /* stylelint-disable-next-line */
  overflow: hidden;
  /* stylelint-disable-next-line */
  display: ${({ isOpenCollapse }) => (isOpenCollapse ? '' : '-webkit-box')};

  max-width: 100%;
  height: ${({ currentHeight }) => currentHeight};

  text-overflow: ellipsis;
  white-space: ${({ isOpenCollapse }) => (isOpenCollapse ? 'none' : 'initial')};

  transition: ${({ theme }) =>
    theme.transitions.create(['height'], {
      duration: theme.transitions.duration.standard,
    })};

  -webkit-box-orient: ${({ isOpenCollapse }) =>
    isOpenCollapse ? '' : 'vertical'};
  -webkit-line-clamp: ${({ rowsCount, isOpenCollapse }) =>
    isOpenCollapse ? 'none' : rowsCount || '1'};
`;

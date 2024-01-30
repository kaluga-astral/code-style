import { useEffect, useRef } from 'react';
import { vi } from 'vitest';
import { InfoFillMd, Typography } from '@astral/ui';

import { renderWithTheme, rtl, userEvents } from '../../_tests';

import { Accordion } from './Accordion';

describe('Accordion', () => {
  it('Ref доступен', () => {
    const resultRef = { current: null };

    const AccordionWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return (
        <Accordion
          summary="Тест"
          startAdorment={<InfoFillMd color="info" />}
          ref={ref}
        />
      );
    };

    renderWithTheme(<AccordionWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Title отображается', () => {
    renderWithTheme(
      <Accordion
        summary="Тест"
        startAdorment={<InfoFillMd color="info" />}
      ></Accordion>,
    );

    const title = rtl.screen.getByText('Тест');

    expect(title).toBeVisible();
  });

  describe('Контент', () => {
    it('Отображается по нажатию на title', async () => {
      renderWithTheme(
        <Accordion summary="Тест" startAdorment={<InfoFillMd color="info" />}>
          <Typography>Контент</Typography>
        </Accordion>,
      );

      const title = rtl.screen.getByRole('button', { name: 'Тест' });

      const content = rtl.screen.getByText('Контент');

      expect(content).not.toBeVisible();
      await userEvents.click(title);
      expect(content).toBeVisible();
    });

    it('Отображается при isExpanded=true', async () => {
      renderWithTheme(
        <Accordion
          summary="Тест"
          startAdorment={<InfoFillMd color="info" />}
          isExpanded
        >
          <Typography>Контент</Typography>
        </Accordion>,
      );

      const content = rtl.screen.getByText('Контент');

      expect(content).toBeVisible();
    });

    it('Скрывается при isExpanded=false', async () => {
      renderWithTheme(
        <Accordion
          summary="Тест"
          startAdorment={<InfoFillMd color="info" />}
          isExpanded={false}
        >
          <Typography>Контент</Typography>
        </Accordion>,
      );

      const content = rtl.screen.getByText('Контент');

      expect(content).not.toBeVisible();
    });
  });

  describe('onChange', () => {
    it('Вызывается без переданного isExpanded', async () => {
      const onChange = vi.fn();

      renderWithTheme(
        <Accordion
          summary="Тест"
          startAdorment={<InfoFillMd color="info" />}
          onChange={onChange}
        >
          <Typography>Контент</Typography>
        </Accordion>,
      );

      const title = rtl.screen.getByRole('button', { name: 'Тест' });

      await userEvents.click(title);
      expect(onChange).toHaveBeenCalled();
    });

    it('Вызывается с переданным isExpanded', async () => {
      const onChange = vi.fn();

      renderWithTheme(
        <Accordion
          summary="Тест"
          startAdorment={<InfoFillMd color="info" />}
          isExpanded
          onChange={onChange}
        >
          <Typography>Контент</Typography>
        </Accordion>,
      );

      const title = rtl.screen.getByRole('button', { name: 'Тест' });

      await userEvents.click(title);
      expect(onChange).toHaveBeenCalled();
    });
  });
});

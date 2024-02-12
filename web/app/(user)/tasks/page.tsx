'use client';
import { Button, rem, useMantineTheme } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

export default function HomePage() {
  const theme = useMantineTheme();
  return (
    <>
      <Button
        color="green.6"
        variant="outline"
        rightSection={<IconChevronDown style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
        pr={12}
      >
        tasks section
      </Button>
    </>
  );
}

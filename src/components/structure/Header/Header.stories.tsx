import { Meta, Story } from '@storybook/react/types-6-0';
import { Header, HeaderProps } from './Header';

export default {
  title: 'structure/Header',
  component: Header,
} as Meta;

export const Default: Story<HeaderProps> = (args) => <Header {...args} />;

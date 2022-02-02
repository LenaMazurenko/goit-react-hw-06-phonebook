import React from 'react';
import { Section } from './Section.styled';

export default function Wrapper({ children }) {
  return <Section>{children}</Section>;
}

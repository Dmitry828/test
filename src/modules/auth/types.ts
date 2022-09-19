import { EntityId } from '@reduxjs/toolkit';

export interface BookState {
  ids: EntityId[];
  entities: Record<string, Book | undefined>;
}

export interface Book {
  id: number | string,
  title: string
}
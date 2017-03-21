import {
  SELECT_CATEGORY,
  SELECT_ITEM
} from './types';

export function setItem(itemId) {
  return { type: SELECT_ITEM, payload: itemId };
};

export function setCategory(categoryId) {
  return { type: SELECT_CATEGORY, payload: }
};

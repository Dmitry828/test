import { booksAdapter } from './reducer';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';


export const {
  selectEntities: getBooksEntities,
  selectAll: getAllBooks,
  selectById: getBookById,
  selectIds: getBooksIds,
} = booksAdapter.getSelectors((state: any): any => state?.booksReducer);

export const getChannelBooks = createSelector(
  getAllBooks,
  (_: any, channelId: string | number) => channelId,

  (messages, channelId) =>

    messages.filter(message => message.id === channelId),
);

export const getChannelBooksIds = createSelector(
  getChannelBooks,
  messages => messages.reduce((ids:any, message) => [...ids, message.id], []),
);

export const getMyBooks = createSelector(
  getBooksIds,
  getBooksEntities,
  (ids, entities) =>
    [...ids]
      .map(id => entities[id])
      // .sort((a, b) => {
      //   const leftDate = a.lastMsg ? a.lastMsg.created : a.created;
      //   const rightDate = b.lastMsg ? b.lastMsg.created : b.created;
      //
      //   return compareAsc(new Date(rightDate), new Date(leftDate));
      // }),
);
// export const getFirstUnreadChannelBookId = createSelector(
//   getLastReadChannelBookeId,
//   getChannelBooks,
//   (lastReadMessageId, messages) =>
//     messages.find(
//       message => !message.deletedAt && message.id > lastReadMessageId,
//     )?.id,
// );

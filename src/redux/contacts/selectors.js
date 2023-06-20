export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.trim().toLowerCase();
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

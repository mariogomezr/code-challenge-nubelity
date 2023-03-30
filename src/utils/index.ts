export const getFullName = (first?: string, last?: string) => `${first} ${last}`;

export const getDOB = (date?: string) => new Date(date as string).toDateString();

export const getFullAddress = (street?: string, number?: string) => `${number} ${street}`;
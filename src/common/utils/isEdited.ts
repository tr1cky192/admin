export const isEdited = (createdAt: string, updatedAt: string) =>
  new Date(createdAt).getTime() < new Date(updatedAt).getTime();

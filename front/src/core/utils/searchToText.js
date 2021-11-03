export const searchToText = ({ data, prop, searchText }) => {
  return data.filter((d) => d?.[prop]?.toLowerCase()?.search(searchText?.toLowerCase()) !== -1)
}
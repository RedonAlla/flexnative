/**
  Helper method to format data for List to display on column.
  @param data original data to display on grid
  @param numColumns number of grid's columns
  @param defaultValue default value to add on data
  @return array of {Type}

  Typical usage:
   * ```
    import { formatData } from '@flexnative/utilities/list.utilities';
    const COLUMN_NUMBER = 3;
   * _renderItem = ({item}) => (
   *   if(item === '')
   *      return <View style={{backgroundColor: 'transparent'}} />
   *   return
   *     <Text>{item}</Text>
   * );
   * ...
   * <FlatList data={formatData(data, COLUMN_NUMBER, '')} numColumns={COLUMN_NUMBER} renderItem={_renderItem} />
   * ```
 */
export function formatData<Type>(data: Array<Type>, numColumns: number, defaultValue: Type): Array<Type> {
  const totalRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - (totalRows * numColumns);

  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push(defaultValue);
    numberOfElementsLastRow++;
  }

  return data;
}
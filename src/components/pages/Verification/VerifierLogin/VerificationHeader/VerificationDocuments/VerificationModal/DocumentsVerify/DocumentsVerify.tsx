import iconFolder from 'assets/icons/folder.svg';
import { Img, List, ListWrapper, Text, Item } from './DocumentsVerify.styled';

type Files = {
  files: File[];
};
export const DocumentsVerify = ({ files }: Files) => (
  <div>
    {files.length > 0 && (
      <ListWrapper>
        <List>
          {files.map((file, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <Item key={index}>
              <Img src={iconFolder} alt="" />
              <Text>{file.name}</Text>
            </Item>
          ))}
        </List>
      </ListWrapper>
    )}
  </div>
);

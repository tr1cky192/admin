import { Img, Item, List } from "./Image.styled";

export const Image = ({ src = '', alt = 'photo', width = 115, height=115 }) => {
  if (!src) {
    // eslint-disable-next-line no-param-reassign
    src = `https://i.ibb.co/nfGwMww/Rectangle-96.jpg/${width}x${height}`; // заглушка временная
  }



  return (
    <List>
      <Item>
        <Img src={src} alt={alt} width={width} height={height} />
      </Item>
    </List>
  );
};

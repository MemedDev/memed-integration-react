import * as Styles from './styles';

interface Props {
  label: string;
  value: string;
}

function ListItems({ label, value }: Props) {
  return (
    <Styles.Container>
      <strong>{label}</strong>
      <p>{value}</p>
    </Styles.Container>
  );
}

export default ListItems;

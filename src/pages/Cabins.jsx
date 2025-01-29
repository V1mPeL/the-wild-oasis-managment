import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CabinTable from '../features/cabins/CabinTable';
import AddCabin from '../features/cabins/AddCabin';
import CabinTableOperatations from '../features/cabins/CabinTableOperatations';

function Cabins() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <CabinTableOperatations />
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;

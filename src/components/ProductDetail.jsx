import { useParams } from 'react-router-dom';

const ProductDetail = () => {
     const { id } = useParams();
  return (
      <div>ProductDetail: { id }</div>
  )
}

export default ProductDetail
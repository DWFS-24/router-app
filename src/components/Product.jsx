import { useParams } from 'react-router-dom'

const Product = () => {
  const params = useParams()
  return (
    <div>
      { console.log(params) }
      Product {params.id}
    </div>
  )
}

export default Product
// import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import ProductWrite from "../../../src/components/units/product/write/ProductWrite.container";

const ProductNewPage = () => {
  return <ProductWrite isEdit={false} />;
};

export default ProductNewPage;
// export default withAuth(ProductNewPage);

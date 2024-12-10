export default async function page(props) {
  const { searchParams, params } = await props;
  const searchQuery = await searchParams;
  const { productId } = await params;

  return (
    <div>
      <p>product details : ID :{productId}</p>
      {/* mention i have used "page" because we are send it as search query in th link like :"url/product/4?page=10"*/}
      <p>product details : params :{searchQuery.page}</p>
    </div>
  );
}

import { useParams } from "react-router-dom";

function Edit() {
  const params = useParams();

  return <div>{params.id} edit</div>;
}

export default Edit;

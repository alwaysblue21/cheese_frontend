import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const cheese = useLoaderData();
  

  return (
    <div className="cheese">
      <h1>{cheese.name}</h1>
      <h2>{cheese.countryOfOrigin}</h2>
      <img src={cheese.image} alt={cheese.name} />

    <h2>Update {cheese.name}</h2>
    <Form action={`/update/${cheese._id}`} method="post">
        <input type="text" name="name" placeholder="cheese's name" defaultValue={cheese.name} />
        <input type="text" name="country of origin" placeholder="Cheese's country Of Origin" defaultValue={cheese.countryOfOrigin} />
        <input type="text" name="image" placeholder="cheese's image" defaultValue={cheese.image} />
        <input type="submit" value="Update cheese"/>
    </Form>

    <h2>Delete cheese</h2>
    <Form action={`/delete/${cheese._id}`} method="post">
        <input type="submit" value="Delete cheese"/>
    </Form>

    </div>
  );
}

export default Show;
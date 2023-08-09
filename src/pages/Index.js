import { Link, useLoaderData, Form } from "react-router-dom";

function Index(props) {
  
  const cheeses = useLoaderData();

  return (
    <div>
        <h2>Create a cheese</h2>
        <Form action="/create" method="post">
            <input type="text" name="name" placeholder="cheese's name"/>
            <input type="text" name="country of origin" placeholder="cheese's country"/>
            <input type="text" name="image" placeholder="cheese's image"/>
            <input className="button" type="submit" value="Create Cheese"/>
        </Form>
      {cheeses.map((cheese, index) => {
        return (
          <div key={cheese._id} className="cheese">
            <Link to={`/${cheese._id}`}>
              <h1>{cheese.name}</h1>
            </Link>
            <img src={cheese.image} alt={cheese.name} />
            <h3>{cheese.countryOfOrigin}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Index;
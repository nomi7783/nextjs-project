import Link from "next/link";
import EditTopicForm from "../../../../components/EditTopicForm";



const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};


export default async function editProduct({params}) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description,category } = topic;

    return (

        <div class="container px-5 py-24 mx-auto">
    
        <Link
        href={`/crud`}
        class="inline-block mt-4 mb-5 bg-white text-blue-500 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 hover:text-white"
      >
        Back
      </Link>
      <h1 class="text-white text-5xl font-bold text-center mb-10 ">
        Edit Product Data
      </h1>
    

        <EditTopicForm id={id} title={title} description={description} category={category}/>
        </div>
      )
  }
  
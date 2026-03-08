import './App.css'
import Card from './components/Card'

function App() {
  const posts = [
    {
      title: "React for beginners",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis beatae consequatur animi, delectus eius accusamus, inventore odit quia est quo velit cum asperiores odio quisquam! Numquam veniam ut corrupti ea.",
      owner: "TheCustomer",
      likes: 2,
      comments:['F*** React']
    },
    {
      title: "This is Python!",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis beatae consequatur animi, delectus eius accusamus, inventore odit quia est quo velit cum asperiores odio quisquam! Numquam veniam ut corrupti ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis beatae consequatur animi, delectus eius accusamus, inventore odit quia est quo velit cum asperiores odio quisquam! Numquam veniam ut corrupti ea.",
      owner: "stEEve",
      likes: 234,
      comments:[]
    },
    {
      title: "Writting code vs AI",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis beatae consequatur animi, delectus eius accusamus, inventore odit quia est quo velit cum asperiores odio quisquam! Numquam veniam ut corrupti ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis beatae consequatur animi, delectus eius accusamus, inventore odit quia est quo velit cum asperiores odio quisquam! Numquam veniam ut corrupti ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis beatae consequatur animi, delectus eius accusamus, inventore odit quia est quo velit cum asperiores odio quisquam! Numquam veniam ut corrupti ea.",
      owner: "Kokoo",
      likes: 22,
      comments:[
        'your post is awesome!',
        'Goog job kokou lil brother'
      ]
    }
  ];


  const title: string = "All Posts";

  return (
    <>
      <h2>{title.toUpperCase()} : </h2>
      <ul>
        {
          posts.map((p) => (
            <Card post={p} key={p.title}/>
          ))
        }
      </ul>


    </>
  )
}

export default App

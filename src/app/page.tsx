import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1>Git hub Training</h1>    
      <ul>
        {data.map(p => (
          <div key={p.id}>
            {p.title}
          </div>
        ))}
      </ul>
    
    </main>
  )
}


const data = [
  {
    id: 1,
    title:' title 1'
  },
  {
    id: 2,
    title:' title 2'
  },
  {
    id: 3,
    title:' title 3'
  },
  {
    id: 4,
    title:' title 4'
  },
]